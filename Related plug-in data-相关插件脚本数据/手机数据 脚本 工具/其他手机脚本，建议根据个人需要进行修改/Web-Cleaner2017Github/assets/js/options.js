/*
This is the script file for the options page. It handles loading the options from localStorage as well as writing them back to localStorage and the background page.
	Author: Joseph Gray
	Date Created: 10/22/2012
	Date Updated: 11/5/2012
	
	
	   Copyright 2013 Joseph Gray

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

	   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

var opt, password = '';

// This function updates an html element to show the change in a the slider bar value for the image scanner sensitivity.
function showValue() {
	document.getElementById('range2').innerHTML = document.getElementById("scanner_sensitivity").value + '%';
}

function show_options() {
	if (password !== opt.password) {
		document.getElementById('code').innerHTML = opt.code;
		document.getElementById('settings_stuff').style.display = 'none';
		document.getElementById('save_button').style.display = 'none';
		return;
	}
	Object.keys(opt).forEach(function(key) {
		var q, a, v = opt[key];
		if (document.querySelector('[name="' + key + '"][type="radio"]')) {
			if (v) {
				q = '[name="' + key + '"][type="radio"][value="' + v + '"]';
				a = 'checked';
				v = true;
			} else {
				q = null;
			}
		} else if (document.querySelector('[name="' + key + '"][type="checkbox"]')) {
			q = '[name="' + key + '"][type="checkbox"]';
			a = 'checked';
		} else if (document.querySelector('[name="' + key + '"]')) {
			q = '[name="' + key + '"]';
			a = 'value';
		} else {
			q = '#' + key;
			a = 'textContent';
		}
		if (q) {
			var el = document.querySelector(q);
			if (!el) {
				console.log(q + ' does not exist.');
			} else {
				el[a] = v;
			}
		}
	});
	showValue();
	toggleWrapper('text', 'text_filter');
	toggleWrapper('image', 'image_filter');
	toggleWrapper('schedule', 'schedule');
	document.getElementById('settings_stuff').style.display = 'block';
	document.getElementById('save_button').style.display = 'inline-block';
	document.getElementById('image_pixelization_box').style.display = opt.image_replacement === "pixels" ? "block" : "none";
	updateSchedule();
}

function save_and_update_background() {
	Object.keys(opt).forEach(function(key) {
		var q, a;
		if (document.querySelector('[name="' + key + '"][type="radio"]')) {
			q = '[name="' + key + '"][type="radio"]:checked';
			a = 'value';
		} else if (document.querySelector('[name="' + key + '"][type="checkbox"]')) {
			q = '[name="' + key + '"][type="checkbox"]';
			a = 'checked';
		} else if (document.querySelector('[name="' + key + '"]')) {
			q = '[name="' + key + '"]';
			a = 'value';
		}
		if (q) {
			var el = document.querySelector(q);
			if (!el) {
				console.log(q + ' does not exist.');
			} else {
				opt[key] = el[a];
			}
		}
	});
	opt.password = password;
	chrome.extension.getBackgroundPage().storeOptions(opt).then(function() {
		load_page();
	});
}


function load_page()
{
	chrome.extension.getBackgroundPage().loadOptions().then(function(values) {
		opt = values;
		show_options();
		if (!opt.password || opt.password === password) {
			hideModal();
		} else {
			showModal('login');
		}
	});
}

function validateWordLists() {
	['blocked_words', 'image_blocked_words'].map(function(id) {
		return document.getElementById(id);
	}).forEach(function(element) {
		element.value = element.value.split('\n')
			// Words shouldn't start or end with whitespace.
			.map(function(word) {
				return word.trim();
			})
			// Words shouldn't be empty.
			.filter(Boolean)
			// Words should be a valid regexp pattern that doesn't match the empty string.
			.map(function(pattern) {
				try {
					if (!new RegExp(pattern).test('')) {
						return pattern;
					}
					// Matches the empty string.
				} catch (e) {
					// Non-valid pattern.
				}
				// Escape everything that isn't escaped.
				return pattern.replace(/\\?((?:\\\\)*[\\\.\+\*\?\^\$\|\[\]\{\}\(\)])/g, "\\$1");
			})
		.join('\n');
	});
}

function toggleWrapper(radioOn, wrapper) {
	var on = document.querySelector('[name=' + radioOn + '_on]:checked');
	wrapper = document.getElementById(wrapper + '_wrapper');
	if (on && (on.type === 'checkbox' || on.value == "true")) {
		wrapper.classList.remove('hidden');
	} else {
		wrapper.classList.add('hidden');
	}
}





function save_button()
{
	validateWordLists();
	save_and_update_background();
}



// These are the event handlers for the options page.

// This event is when the slider bar is changed. It will update the html value of the number that shows the value of the slider bar.
document.getElementById("scanner_sensitivity").addEventListener('input', showValue);

// This event will load the options, populating all the fields, and checking the appropriate radio/checkbox buttons.
document.addEventListener('DOMContentLoaded', load_page);

// This event handles what happens when the save button is clicked.
document.getElementById("save_button").addEventListener('click', save_button);
$('#export').click(function() {
	showModal('export');
});$('#password').click(function() {
	showModal('password');
});
$('#import').click(function(e) {
	e.preventDefault();
	var file = document.createElement('input');
	file.type = 'file';
	file.accept = '.wcs';
	file.addEventListener('change', function() {
		var fr = new FileReader();
		fr.addEventListener('load', function(data) {
			chrome.extension.getBackgroundPage().importOptions(new Uint8Array(fr.result)).then(function() {
				password = '';
				load_page();
			}).catch(function(err) {
				alert(err);
			});
		});
		fr.readAsArrayBuffer(file.files[0]);
	});
	file.click();
});

[].forEach.call(document.getElementsByName('image_on'), function(radio) {
	radio.addEventListener('change', function() {toggleWrapper('image', 'image_filter');});
});

[].forEach.call(document.getElementsByName('text_on'), function(radio) {
	radio.addEventListener('change', function() {toggleWrapper('text', 'text_filter');});
});

[].forEach.call(document.getElementsByName('schedule_on'), function(radio) {
	radio.addEventListener('change', function() {toggleWrapper('schedule', 'schedule');});
});

[].forEach.call(document.getElementsByName('image_replacement'), function(radio) {
	radio.addEventListener('change', function() {
		[].forEach.call(document.querySelectorAll('#image_pixelization_box'), function(wrapper) {
			if (document.querySelector('[name="image_replacement"][value="pixels"]').checked) {
				wrapper.style.display = 'block';
			} else {
				wrapper.style.display = 'none';
			}
		});
	});
});

$('#modalBackground [data-form="login"] [data-role="password"]').on('keyup change', function() {
	if (password !== opt.password) {
		password = $(this).val();
		if (password === opt.password) {
			hideModal();
			show_options();
		}
	}
});

$('#modalBackground [data-form="password"] [data-role="password"]').on('keydown', function(e) {
	if (e.keyCode === 13) {
		password = $('#modalBackground [data-form="password"] [data-role="password"]').val();
		if (password !== opt.password) {
			save_and_update_background();
		}
		hideModal();
	}
});
$('#modalBackground [data-form="password"] [data-role="submit"]').on('click', function() {
	password = $('#modalBackground [data-form="password"] [data-role="password"]').val();
	if (password !== opt.password) {
		save_and_update_background();
	}
	hideModal();
});

$('#modalBackground').on('click', function(e) {
	if (this === e.target && password === opt.password) {
		hideModal();
	}
});

function showModal(form) {
	var $form = $('#modalBackground > .modal[data-form="' + form + '"]');
	if (!$form.is(':visible')) {
		$('#modalBackground > .modal').not($form).hide();
		$form.show();
		if (form === 'login') {
			$form.find('[data-role="code"]').text(opt.code);
			$form.find('input[data-role="password"]').val('');
			setTimeout(function() {
				$form.find('input[data-role="password"]').focus();
			}, 1);
		} else if (form === 'password') {
			$form.find('input[data-role="password"]').val(opt.password);
			setTimeout(function() {
				$form.find('input[data-role="password"]').focus().select();
			}, 1);
		} else if (form === 'export') {
			pika.setDate(new Date());
		}
	}
	$('#modalBackground').show();
}

function hideModal() {
	$('#modalBackground').hide();
}

var pika = new Pikaday({
	firstDay: 1,
	minDate: new Date(),
	maxDate: new Date(2020, 12, 31),
	yearRange: [2000,2020],
	onSelect: function() {
		var expiry = this.getDate();
		expiry.setHours(0);
		expiry.setMinutes(0);
		expiry.setSeconds(0);
		expiry.setMilliseconds(0);
		expiry = expiry.setDate(expiry.getDate() + 1);
		chrome.extension.getBackgroundPage().storeOptions(null, expiry).then(function(result) {
			var $a = $('#modalBackground [data-form="export"] [data-role="link"] a');
			if ($a.length) {
				URL.revokeObjectURL($a.eq(0).attr('href'));
			} else {
				$a = $('<a>');
				$('#modalBackground [data-form="export"] [data-role="link"]').append($a);
			}
			$a.attr('href', URL.createObjectURL(new Blob([result.data], {type: "octet/stream"})));
			$a.attr('download', result.code + '.wcs');
			$a.text(result.code + '.wcs');
			$('[data-form="export"] label[for="link"]').show();
		});
	}
});
$('#modalBackground [data-form="export"] [data-role="expiry-date"]').replaceWith(pika.el);

