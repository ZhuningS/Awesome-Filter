/*
This is the background page for the extension. It's primary purpose is to hold the options selected in memory to enable quick access to them. It will also communicate with the content script.
This script will also contain the code called when buttons are clicked in the options page.

Author: Joseph Gray
Date Created: 11/2/2012
Date Modified: 2/2/2013



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

// The background page is reloaded each time the extension is enabled after being disabled (the background page unloads when disabled).
// Therefore, I can use the background page to track when the extension is enabled by running a function each time the extension is enabled.
// However, the background page will also re-load when chrome is started, and stops when chrome exits. So we need to figure that out.
// If the background page can access see what other processes are running, then it will be able to tell when the browser just started?


var cryptoIV = new Uint8Array([29, 246, 115, 171, 134, 193, 217, 183, 167, 103, 197, 86]);
var cryptoKey = 'Y0zt37HgOx-BY7SQjYVmrqhPkO44Ii2Jcb9yydUDPfE';

// This initializes localStorage when the extension is installed.
var options = [
	{name: "password", type: 'string', default: ''},
	{name: "code", type: 'string', default: ''},
	{name: "install_date", type: 'integer', default: new Date().getTime()},
	{name: "text_on", type: 'boolean', default: true},
	{name: "blocked_words", type: 'string', default: "sex\nbreast\nboob\npenis\ndick\nvagina\nfuck\ndamn\nhell\nmasturbate\nmasturbation\nhandjob\nblowjob\nfellatio\nnaked\nnude"},
	{name: "whitelisted_websites", type: 'string', default: ""},
	{name: "WordOrSentence", type: 'string', default: ""},
	{name: "block_paragraph", type: 'boolean', default: false},
	{name: "num_for_paragraph", type: 'integer', default: 3},
	{name: "paragraph_text", type: 'text', default: '[:Censored Paragraph:]'},
	{name: "block_webpage", type: 'boolean', default: false},
	{name: "num_for_webpage", type: 'integer', default: 10},
	{name: "image_on", type: 'boolean', default: true},
	{name: "image_block_words", type: 'boolean', default: true},
	{name: "image_blocked_words", type: 'string', default: "sex\nbreast\nboob\npenis\nvagina\ndick\nfuck\nmasturbate\nmasturbation\nhandjob\nblowjob\nfellatio\nnaked\nnude\nbra \npanties\nrisque\nraunch\nmaxim\nplayboy\nstripper\nprostitute\nlingerie"},
	{name: "image_whitelisted_websites", type: 'string', default: ""},
	{name: "image_scanner", type: 'boolean', default: true},
	{name: "image_background", type: 'boolean', default: true},
	{name: "scanner_sensitivity", type: 'integer', default: 50},
	{name: "image_replacement", type: 'string', default: "logo"},
	{name: "image_pixelization", type: 'integer', default: 50},
	{name: "image_blurring", type: 'boolean', default: true},
	{name: "image_blocking", type: 'boolean', default: true},
	{name: "image_two_pass", type: 'boolean', default: true},
	{name: "schedule_on", type: 'boolean', default: true},
	{name: "schedule", type: 'string', default: '[]'},
	//{name: "save_note", type: 'boolean', default: true}
	{name: "tips_on", type: 'boolean', default: true},
], optionsByName = {};

options.forEach(function(option) {
	optionsByName[option.name] = option;
});

var stringCoder = {
	decode: function(array) {
		var decoded = ''; //new TextDecoder('utf8').decode(new Uint8Array(encrypted));
		for (var i = 0; i < array.length; ++i) {
			decoded += ('0' + array[i].toString(16)).slice(-2);
		}
		return decoded;
	},
	encode: function(string) {
		var encoded = new Uint8Array(string.length / 2); //new TextEncoder('utf8').encode(data);
		for (var i = 0; i < encoded.length; ++i) {
			encoded[i] = parseInt(string.slice(i * 2, i * 2 + 2), 16);
		}
		return encoded;
	}
};

function loadOptions() {
	return new Promise(function(resolve, reject) {
		var crypt = localStorage.getItem('options');
		if (crypt) {
			var encoded = stringCoder.encode(crypt);
			decrypt(encoded).then(unpack).catch(function() {
				parse({});
			});
		} else {
			parse({});
		}
		function unpack(data) {
			try {
				//data = new TextDecoder('utf8').decode(data);
				//data = LZW.decompress(data);
				var stringData = new TextDecoder('utf8').decode(data);
				data = JSON.parse(stringData).options;
			} catch (e) {
				data = {};
			}
			parse(data)
		}
		function parse(data) {
			var values = {};
			options.forEach(function(option) {
				var value = data[option.name];
				if (typeof value === 'undefined') {
					value = option.default;
				} else if (option.type === 'boolean') {
					value = !!value;
				} else if (option.type === 'string') {
					value = String(value);
				} else if (option.type === 'integer') {
					value = Math.round(value);
				} else if (option.type === 'number') {
					value = +value;
				}
				values[option.name] = value;
			});
			values.effective = Object.assign({}, values);
			if (values.schedule_on) {
				var now = new Date();
				var currentHour = now.getDay() * 24 + now.getHours();
				var currentSchedule = JSON.parse(values.schedule)[currentHour] || 0;
				if (currentSchedule < 1) {
					values.effective['image_on'] = false;
				}
				if (currentSchedule < 2) {
					values.effective['text_on'] = false;
				}
			}
			resolve(values);
		}
	});
}

function importOptions(encoded) {
	return new Promise(function(resolve, reject) {
		decrypt(encoded).then(function(data) {
			var stringData = new TextDecoder('utf8').decode(data);
			data = JSON.parse(stringData);
			if (!(Date.now() < data.expiryDate)) {
				reject('File is expired.');
				return;
			}
		    var decoded = stringCoder.decode(encoded)
			localStorage.setItem('options', decoded);
			resolve();
		}).catch(function() {
			reject('Cannot read file.');
		});
		
	});
}

function storeOptions(values, expiryDate) {
	return new Promise(function(resolve, reject) {
		loadOptions().then(function(old) {
			var data = {}, changed = false;
			if (!values) {
				data = old;
			} else {
				options.forEach(function(option) {
					var value = values[option.name];
					if (typeof value === 'undefined') {
						value = option.default;
					} else if (option.type === 'boolean') {
						value = !!value;
					} else if (option.type === 'string') {
						value = String(value);
					} else if (option.type === 'integer') {
						value = Math.round(value);
					} else if (option.type === 'number') {
						value = +value;
					}
					data[option.name] = value;
					if (value !== old[option.name]) {
						changed = true;
					}
				});
			}
			if (changed) {
				data.code = ('0000'+Math.floor(Math.random()*Math.pow(36, 5)).toString(36)).slice(-5).toUpperCase();
			}
			var code = data.code;
			var stringData = JSON.stringify({
				date: Date.now(),
				expiryDate: expiryDate || (Date.now() + 24*60*60*1000),
				options: data
			});
			encrypt(new TextEncoder('utf8').encode(stringData)).then(function(encrypted) {
			    var decoded = stringCoder.decode(encrypted);
				localStorage.setItem('options', decoded);
				resolve({code: code, data: encrypted});
				if (changed) stats.addTransient('options');
			}).catch(function(err) {
				reject(err);
			});
		});
	});
}

function encrypt(encoded) {
	return new Promise(function(resolve, reject) {
		crypto.subtle.importKey(
		    "jwk", //can be "jwk" or "raw"
		    {   //this is an example jwk key, "raw" would be an ArrayBuffer
		        kty: "oct",
		        k: cryptoKey,
		        alg: "A256GCM",
		        ext: true,
		    },
		    {   //this is the algorithm options
		        name: "AES-GCM",
		    },
		    false, //whether the key is extractable (i.e. can be used in exportKey)
		    ["encrypt", "decrypt"] //can "encrypt", "decrypt", "wrapKey", or "unwrapKey"
		)
		.then(function(key){
		    //returns the symmetric key
			crypto.subtle.encrypt(
			    {
			        name: "AES-GCM",

			        //Don't re-use initialization vectors!
			        //Always generate a new iv every time your encrypt!
			        //Recommended to use 12 bytes length
			        iv: cryptoIV,

			        //Additional authentication data (optional)
			        /*additionalData: ArrayBuffer,*/

			        //Tag length (optional)
			        tagLength: 128, //can be 32, 64, 96, 104, 112, 120 or 128 (default)
			    },
			    key, //from generateKey or importKey above
			    encoded //ArrayBuffer of data you want to encrypt
			)
			.then(function(encrypted){
			    //returns an ArrayBuffer containing the encrypted data
				resolve(new Uint8Array(encrypted));
			})
			.catch(function(err){
		    	reject(err);
			});
		})
		.catch(function(err){
		    reject(err);
		});
	});
}

function decrypt(encoded) {
	return new Promise(function(resolve, reject) {
		crypto.subtle.importKey(
		    "jwk", //can be "jwk" or "raw"
		    {   //this is an example jwk key, "raw" would be an ArrayBuffer
		        kty: "oct",
		        k: cryptoKey,
		        alg: "A256GCM",
		        ext: true,
		    },
		    {   //this is the algorithm options
		        name: "AES-GCM",
		    },
		    false, //whether the key is extractable (i.e. can be used in exportKey)
		    ["encrypt", "decrypt"] //can "encrypt", "decrypt", "wrapKey", or "unwrapKey"
		)
		.then(function(key){
		    //returns the symmetric key
			crypto.subtle.decrypt(
			    {
			        name: "AES-GCM",

			        //Don't re-use initialization vectors!
			        //Always generate a new iv every time your encrypt!
			        //Recommended to use 12 bytes length
			        iv: cryptoIV,

			        //Additional authentication data (optional)
			        /*additionalData: Uint8Array,*/

			        //Tag length (optional)
			        tagLength: 128, //can be 32, 64, 96, 104, 112, 120 or 128 (default)
			    },
			    key, //from generateKey or importKey above
			    encoded //ArrayBuffer of data you want to encrypt
			)
			.then(function(decrypted){
			    //returns an ArrayBuffer containing the encrypted data
				resolve(new Uint8Array(decrypted));
			})
			.catch(function(err){
		    	reject(err);
			});
		})
		.catch(function(err){
		    reject(err);
		});
	});
}

loadTemplates();

// Will need to load the variables upon the first check from the content script. This will be done by checking to see if text_on is null. If it is, the background script will execute a function that will
// load the options from localStorage. If text_on is not null, that means the options have already been loaded and they will be used.


var templates = new Object();

// Function to pass options object to content script.
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {

    if (request.greeting == "request_options")
	{
		
		//window.alert("No need for loading options object."); // Used for testing. Test Case 002. same for line below
		//window.alert("Options object: " + "\ntext_on " + options.text_on + "\n" + "blocked_words " + options.blocked_words + "\n" + "whitelisted_websites " + options.whitelisted_websites + '\n' + "replace_sentence " + options.replace_sentence + '\n' + "block_paragraph " + options.block_paragraph + '\n' + "block_webpage " + options.block_webpage + '\n' + "num_paragraph " + options.num_for_paragraph + '\n'+ "num_webpage " + options.num_for_webpage + '\n' + "image_on " + options.image_on + '\n' + "image_blocked_words " + options.image_blocked_words + '\n' + "image_whitelist " + options.image_whitelisted_websites + '\n'+ "image_scanner " + options.image_scanner + '\n' + "scanner_sensitivity " + options.scanner_sensitivity);  //Used for testing.
		loadOptions().then(function(values) {
			sendResponse({farewell: values, templates: templates});
		}).catch(function(err) {
			console.log(err);
		});
		return true;
	}

	else if (request.greeting == "store_options")
	{
		storeOptions(request.values).then(function(values) {
			sendResponse({farewell: 'success'});
		}).catch(function(err) {
			console.log(err);
		});
		return true;
	}

	else if (request.greeting == "update_stats")
	{
		// forward message
		chrome.tabs.sendMessage(sender.tab.id, request);
	}
	
	else if (request.greeting == "request_xhr")
	{
		// Now create an xml request for the image so we can circumvent the cross-origin problem.
		var xhr = new XMLHttpRequest();

		xhr.open('GET', request.url) // Use an asynchronous get request on the image url.
		xhr.responseType = 'blob'; // Used so we can encode the binary into base64
		xhr.onreadystatechange = function() {
			// If the request is ready...
			if (xhr.readyState == 4)
			{
				// And we got an OK response...
				if (xhr.status == 200)
				{
					if (request.type === 'data-url')
					{
						// Convert the blob to a DataURL.
						var reader = new FileReader();
						reader.addEventListener("loadend", function() {
							sendResponse({status: xhr.status, type: request.type, result: reader.result});
						});
						reader.readAsDataURL(xhr.response); // This should encode the image data as base64.
					}
					else if (request.type === 'object-url')
					{
						sendResponse({status: xhr.status, type: request.type, result: URL.createObjectURL(xhr.response)});
					}
					else // request.type === 'blob'
					{
						sendResponse({status: xhr.status, type: 'blob', result: xhr.response});
					}
				} // end if
				else
				{
					sendResponse({status: xhr.status});
				}
			} // end if
		};
		xhr.send(); // Send the request.
		return true; // Keep message port open. We'll respond later.
	}

	else if (request.greeting == "run_nudejs")
	{
		var myWorker = new Worker(chrome.extension.getURL("assets/js/worker.nude.js"));
		var message = request.data;
		myWorker.postMessage(message);
		myWorker.onmessage = function(event) {
			sendResponse({data: event.data});
		};
		return true;
	}
  });

function getCanvasFromUrl(src, maxPixels, callback) {
	// If the image src is a DataURL, use it synchronously.
	if (src.startsWith('data:'))
	{
		getCanvasFromDataUrl(src, maxPixels, callback);
	} // end sync if

	else // load it asynchronously
	{
		// Now create an xml request for the image so we can circumvent the cross-origin problem.
		var xhr = new XMLHttpRequest();

		xhr.open('GET', src) // Use an asynchronous get request on the image url.
		xhr.responseType = 'blob'; // Used so we can encode the binary into base64
		xhr.onreadystatechange = function() {
			// If the request is ready...
			if (xhr.readyState == 4)
			{
				// And we got an OK response...
				if (xhr.status == 200)
				{
					// Convert the blob to a DataURL, then load it into an img to extract pixel data from it.
					var reader = new FileReader();
					reader.addEventListener("loadend", function() {
						getCanvasFromDataUrl(reader.result, maxPixels, callback);
					});
					reader.readAsDataURL(xhr.response); // This should encode the image data as base64.
				} // end if
				else
				{
					callback(null);
				}
			} // end if
		};
		try {
			xhr.send(); // Send the request.
		} catch (e) {
			chrome.extension.sendMessage({"greeting": "request_xhr", url: src}, function(result) {
				if (result) {
					getCanvasFromDataUrl(result, maxPixels, callback);
				} else {
					callback(null);
				}
			});
		}
	} // end async if
}

chrome.webNavigation.onCommitted.addListener(function({tabId, frameId, url}) {
	if (/^https?:\/\/|^about:/.test(url)) { // TODO: check which schemas work
		loadOptions().then(function(values) {
			values = values.effective;
			if (values['image_on'] && values['image_blurring'] && !isUrlWhitelisted(values.image_whitelisted_websites, url)) {
				chrome.tabs.insertCSS(tabId, {
					matchAboutBlank: true,
					file: "assets/css/blockimg.css",
					runAt: "document_start",
					frameId: frameId,
					allFrames: false
				});
			}
		});
	}
});

chrome.browserAction.onClicked.addListener(function(activeTab) {
	openProgress();
});

function isUrlWhitelisted(list, url) {
	var re = /^([^:]*:\/\/)?([^\/#?:]*)(:[^\/#?])?(\/[^#?]*)?(\?[^#]*)?(#.*)?$/;
	var m = re.exec(url);
	if (!m) {
		return false;
	}
	url = m[2] + (m[3] || ':') + (m[4] || '/') + (m[5] || '?') + (m[6] || '#');
	var whitelisted = list.split('\n').some(function(item) {
		var m = re.exec(item.trim());
		var protocol = m[1], hostname = m[2], port = m[3], path = m[4], search = m[5], hash = m[6];
		var regex =
			'^' +
			hostname.split('*').map(escape).join('[^:]*') + 
			(!port ? ':\\d*' : port.split('*').map(escape).join('[^/]*')) +
			(!path ? '/[^#?]*' : path.split('*').map(escape).join('[^#?]*')) +
			(!search ? '\\?[^#]*' : search.split('*').map(escape).join('[^#]*')) +
			(!hash ? '#.*' : hash.split('*').map(escape).join('.*')) +
			'$';
		return new RegExp(regex, 'img').test(url);
		function escape(str) {
			return str.replace(/[\[\]\{\}\(\)\+\?\.\\\^\$\|]/g, '\\$&');
		}
	});
	return whitelisted;
}



var progressUrl = null;
function openProgress() {
	var url = "assets/html/progress.html";
	if (!progressUrl) {
		chrome.tabs.create({url: url}, function(tab) {
			progressUrl = tab.url;
		});
	} else {
		chrome.tabs.query({currentWindow: true}, function(tabs) {
			tabs = (tabs || []).filter(function(tab) {
				return tab.url == progressUrl;
			});
			if (tabs.length) {
				if (!tabs.some(function(tab) {
					return tab.active;
				})) {
					chrome.tabs.update(tabs[0].id, {active: true});
				}
			} else {
    			chrome.tabs.create({url: url});
			}
		});
	}
}

function loadTemplates() {
	chrome.runtime.getPackageDirectoryEntry(function(root) {
		root.getDirectory("assets/templates/", {create: false}, function(dir) {
			dir.createReader().readEntries(function(files) {
				files.filter(function(file) {
					return file.isFile;
				}).forEach(function(file) {
					file.file(function(blob) {
						var reader = new FileReader();
						reader.onloadend = function(e) {
							templates[file.name] = reader.result;
						};
						reader.readAsText(blob);
					});
				});
			});
		});
	});
}


var stats = {
	events: [],
	listeners: [],
	changes: null,
	dbg: {}
};

try {
	stats.events = JSON.parse(localStorage.getItem('events')) || [];
} catch (e) {}


stats.addTransient = function(type, time, value) {
	stats.addEvents([{type: type, time: time, value: value}], 'transient');
};

stats.addEvent = function(type, time, value) {
	console.log(type, time, value);
	stats.addEvents([{type: type, time: time, value: value}]);
};

stats.addTransients = function(events) {
	stats.addEvents(events, 'transient');
};

stats.addEvents = function(events, transient) {
	var now = Date.now();
	events = events.map(function(e) {
		return {
			type: e.type,
			time: e.time || now,
			value: e.value
		};
	});
	if (!transient) {
		events.forEach(function(e) {
			stats.events.push(e);
		});
		stats.events.sort(function(a, b) {
			return a.time - b.time;
		});
		localStorage.setItem('events', JSON.stringify(stats.events));
	}
	if (stats.changes) {
		events.forEach(function(e) {
			stats.changes.push(e);
		});
	} else if (stats.listeners.length) {
		stats.changes = events;
		setTimeout(function() {
			var changes = stats.changes.sort(function(a, b) {
				return a.time - b.time;
			}), listeners = stats.listeners.slice();
			stats.changes = null;
			listeners.forEach(function(listener) {
				var types = listener.types,
					from = listener.from,
					to = listener.to,
					cb = listener.cb,
					notable = changes.filter(function(event) {
						return types.indexOf(event.type) >= 0 && from <= event.time && event.time < to;
					});
				if (notable.length) {
					try {
						cb(notable);
					} catch (e) {
						console.error(e);
						// Remove broken listeners
						stats.listeners = stats.listeners.filter(function(listener) {
							return listener.cb !== cb;
						});
					}
				}
			});
		}, 0);
	}
};

stats.countEvents = function(types, from, to) {
	if (!from) from = -Infinity;
	if (!to) to = +Infinity;
	if (!(types instanceof Array)) types = [types];
	return stats.events.filter(function(event) {
		return types.indexOf(event.type) >= 0 && from <= event.time && event.time < to;
	}).length;
};

stats.getEvents = function(types, from, to) {
	if (!from) from = -Infinity;
	if (!to) to = +Infinity;
	if (!Array.isArray(types)) types = [types];
	return stats.events.filter(function(event) {
		return types.indexOf(event.type) >= 0 && from <= event.time && event.time < to;
	});
};

stats.listen = function(types, from, to, cb) {
	if (typeof from === 'function') {
		cb = from;
		from = to = 0;
	} else if (typeof to === 'function') {
		cb = to;
		to = 0;
	}
	if (!from) from = -Infinity;
	if (!to) to = +Infinity;
	if (!Array.isArray(types)) types = [types];
	if (typeof cb === 'function') {
		stats.listeners.push({
			types: types,
			from: from,
			to: to,
			cb: cb
		});
	}
};

stats.unlisten = function(types, cb) {
	if (!Array.isArray(types)) types = [types];
	if (typeof cb === 'function') {
		var remove = [];
		stats.listeners.map(function(l) {
			if (l.cb === cb) {
				l.types = l.types.filter(function(t) {
					return types.indexOf(t) < 0;
				});
				if (!l.types.length) {
					return l;
				}
			}
		}).filter(Boolean).forEach(function(l) {
			stats.listeners.splice(stats.listeners.indexOf(l), 1);
		});
	}
};

stats.dbg.fake = function() {
	var start = new Date(2015, 7, 31);
	var end = new Date();
	var lastType, lastTime;
	// remove installation
	var events = stats.events.filter(function(e) {
		return e.type !== 'installed';
	});
	// add some events
	for (var current = start.getTime(); current < end.getTime(); current += 1*24*60*60*1000*(1 - Math.pow(Math.random(), 2))) { 
		var time = Math.floor(current);
		if (Math.random() < 0.5) {
			type = ['edged', 'cummed', 'milked', 'ruined'][Math.max(0,Math.floor(Math.random() * 10)-6)];
			value = undefined;
		} else {
			type = 'feeled';
			value = ['happy','unhappy','shocked','angry','upset','unsure','stressed','frustrated','turnedOn','addicted','bored','hero'][Math.floor(Math.random() * 12)];
		}
		events.push({type: type, time: time, value: value});
	}
	// add a reasonable installation
	events.push({type: 'installed', time: events.reduce(function(minTime, e) {
		return e.time < minTime ? e.time : minTime;
	}, Date.now()) - 1000 - Math.random() * 24*60*60*1000});
	// add the milestones
	/*events.filter(function(e) {
		return ['installed', 'cummed', 'milked', 'ruined'].indexOf(e.type) >= 0;
	}).sort(function(a, b) {
		return a.time - b.time;
	}).forEach(function(e, i, a) {
		var until;
		if (i + 1 === a.length) {
			until = Date.now();
		} else {
			until = a[i + 1].time;
		}
		milestones.getMilestones(e.time).filter(function(ms) {
			return ms.time < until;
		}).forEach(function(ms) {
			events.push({type: 'milestone', time: ms.time, value: {stage: ms.stage, index: ms.index}});
		});
	});*/
	// resort everything
	events.sort(function(a, b) {
		return a.time - b.time;
	});
	stats.events = [];
	stats.addEvents(events);
};
stats.dbg.ffw = function(unit, value) {
	var basis;
	if (unit) {
		basis = Date.now();
	} else {
		basis = milestones.getBasis();
		var ms = milestones.getCurrentStage().getInfo().filter(function(e) {
			return e.time > Date.now();
		})[0];
		if (!ms || !Number.isFinite(ms.value)) {
			return;
		}
		unit = ms.unit;
		value = ms.value;
	}
	var newBasis = new Date();
	milestones.time.add(newBasis, unit, -value);
	newBasis = newBasis.getTime();
	var d = basis - newBasis;
	var events = stats.events;
	events.forEach(function(e) {
		e.time -= d;
	});
	stats.events = [];
	stats.addEvents(events);
};
stats.dbg.reset = function() {
	stats.events.length = 0;
	stats.addEvent('installed');
};

if (!stats.getEvents('installed').length) {
	stats.addEvent('installed');
}

openProgress();