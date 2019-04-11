document.addEventListener('DOMContentLoaded', function() {
	var milestones = chrome.extension.getBackgroundPage().milestones;
	var stats = chrome.extension.getBackgroundPage().stats;
	document.getElementById('button-more').addEventListener('click', function() {
		chrome.extension.getBackgroundPage().openProgress();
	}, false);
	document.getElementById('button-reset').addEventListener('click', function() {
		stats.dbg.reset();
	}, false);
	document.getElementById('button-ffwms').addEventListener('click', function() {
		stats.dbg.ffw();
	}, false);
	document.getElementById('button-ffwday').addEventListener('click', function() {
		stats.dbg.ffw('day', 1);
	}, false);
	document.getElementById('button-fake').addEventListener('click', function() {
		stats.dbg.fake();
	}, false);
	$('#container').empty();

	stats.listen(['installed', 'cummed', 'milked', 'ruined'], onStats);
	milestones.listen('milestone', onMilestone);
	addEventListener('unload', function() {
		stats.unlisten(['installed', 'cummed', 'milked', 'ruined'], onStats);
		milestones.unlisten('milestone', onMilestone);
	});

	initEvents();

	function initEvents() {
		var events = stats.getEvents(['installed', 'cummed', 'milked', 'ruined']);
		// 1) Milestone events are not logged anymore.
		// 2) milestones.getLast() only returns the last achieved milestone if it was after the last CPR.
		// -> So to display the actual last milestone we have to do some work until we get a better API.
		var until = Date.now();
		searchForLastMilestone: for (var i = events.length - 1; 0 <= i; --i) {
			var mss = milestones.getMilestones(events[i].time);
			for (var j = mss.length - 1; 0 <= j; --j) {
				if (mss[j].time <= until) {
					events.splice(i + 1, 0, {
						type: 'milestone',
						time: mss[j].time,
						value: {
							stage: mss[j].stage,
							index: mss[j].index
						}
					});
					break searchForLastMilestone;
				}
			}
			until = events[i].time;
		}
		displayEvents(events);
	}

	function onStats(events) {
		if (events.some(function(e) {
			return e.type === 'installed';
		})) {
			initEvents();
		} else {
			displayEvents(events);
		}
	}

	function onMilestone(e) {
		displayEvents([e])
	}

	function displayEvents(events) {
		var installed, orgasm, milestone;
		events.forEach(function(e) {
			if (e.type === 'milestone') {
				milestone = e;
			} else if (e.type === 'installed') {
				installed = e;
			} else {
				orgasm = e;
			}
		});
		if (installed && !milestone) {
			milestones.getLast();
		}
		[installed, orgasm, milestone].filter(Boolean).sort(function(a, b) {
			return a.time - b.time;
		}).forEach(function(e) {
			if (e.type === 'installed') {
				$('#container').find('[data-type]').remove();
				//return;
			}
			var $item = $('<div><div class="inline"><img align="top" /> <span></span></div><div class="time inline"></span></div></div>')
			var type, $img = $item.find('img'), $msg = $item.find('span').first(), $time = $item.find('.time');
			if (e.type === 'installed') {
				type = 'installed';
				$img.attr('src', '../img/silk/computer_add.png');
				$msg.text('Installed Web Cleaner');
			} else if (e.type === 'milestone') {
				type = 'milestone';
				$img.attr('src', '../img/silk/award_star_bronze_2.png');
				$msg.text(milestones.name(e.value.stage, e.value.index) + ' Achieved');
			} else {
				type = 'orgasm';
				$img.attr('src', '../img/silk/lock_break.png');
				$msg.text('You ' + e.type);
			}
			var d = new Date(e.time);
			$time.attr('title', d.toDateString()).text(formatTime(d));
			$('#container').find('[data-type="' + type + '"]').remove();
			$item.attr('data-type', type);
			$('#container').append($item);
		});
	}

	function updateMS() {
		var msItem = document.getElementById('item-milestone');
		var msLabel = document.getElementById('milestone-text');
		var msTime = document.getElementById('milestone-time');
		var ms = milestones.getLast();
		console.log(ms);
		if (ms && Date.now() - ms.time < 24*60*60*1000) {
			msLabel.textContent = ms.name;
			msTime.textContent = formatTime(new Date(ms.time));
			msItem.style.display = 'block';
		} else {
			msItem.style.display = 'none';
		}


	}

		function formatTime(d) {
			var hours = d.getHours();
			var minutes = d.getMinutes();
			var ampm = 'AM';
			if (hours >= 12) {
				ampm = 'PM';
				hours -= 12;
			}
			if (hours === 0) {
				hours = 12;
			}
			var time = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ' ' + ampm;
			var now = new Date();
			if (Math.abs(now.getTime() - d.getTime()) >= 12*60*60*1000 || d.getDate() !== now.getDate() || d.getMonth() !== now.getMonth() || d.getFullYear() !== now.getFullYear()) {
				time = 'Sun, Mon,Tue,Wed,Thu,Fri,Sat'.split(',')[d.getDay()] + ' @ ' + time;
			}
			return time;
		}
}, false);