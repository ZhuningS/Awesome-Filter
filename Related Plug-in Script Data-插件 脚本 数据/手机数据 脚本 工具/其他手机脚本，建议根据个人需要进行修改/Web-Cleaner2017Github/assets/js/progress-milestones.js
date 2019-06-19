$(document).ready(function() {
	var milestones = chrome.extension.getBackgroundPage().milestones;
	milestones.listen('stage', onStage);
	milestones.listen('milestone', onMilestone);
	milestones.listen('reset', onReset);
	addEventListener('unload', function() {
		milestones.unlisten('stage', onStage);
		milestones.unlisten('milestone', onMilestone);
		milestones.unlisten('reset', onReset);
	}, true);

	var stage = milestones.getCurrentStage();
	initProgressBar();
	update();

	function onStage() {
		stage = milestones.getCurrentStage();
		initProgressBar();
	}

	function onMilestone() {
		update();
	}

	function onReset() {
		stage = milestones.getCurrentStage();
		initProgressBar();
		update();
	}

	function update() {
		updateProgressBar();
		updateCountdown();
		if (['second'].indexOf(stage.unit) >= 0) {
			// update every second
			scheduleUpdate(1000);
		} else if (['minute'].indexOf(stage.unit) >= 0) {
			// update every 10 seconds
			scheduleUpdate(10000);
		} else {
			// update every full minute
			scheduleUpdate((60 - new Date().getSeconds()) * 1000);
		}
	}

	var updateTimer;
	function scheduleUpdate(when) {
		if (!updateTimer) {
			updateTimer = {
				time: Date.now() + when,
				timeout: setTimeout(run, when)
			};
		} else {
			if (Date.now() + when < updateTimer.time) {
				clearTimeout(updateTimer.timeout);
				updateTimer.time = Date.now() + when;
				updateTimer.timeout = setTimeout(run, when);
			}
		}
		function run() {
			updateTimer = null;
			update();
		}
	}

	function updateProgressBar() {
		var info = stage.getInfo();
		var minValue = info[0].time, maxValue = info[info.length - 1].time;
		$('.progress').each(function() {
			var $mss = $(this).find('.progress-wrapper > .progress-bar > .progress-mss-wrapper > .progress-mss > .progress-ms');
			var $curr = $(this).find('.progress-wrapper > .progress-bar > .progress-curr');
			if ($mss.length && $curr.length) {
				var currLeft = $curr.offset().left;
				var $firstMs = $mss.first();
				var $lastMs = $mss.last();

				var minPx = $firstMs.offset().left - currLeft;
				var maxPx = $lastMs.offset().left - currLeft;

				$curr.width((Date.now() - minValue) / (maxValue - minValue) * (maxPx - minPx) + minPx);
			}
		});
	}
	function initProgressBar() {
		var info = stage.getInfo();
		var minValue = info[0].time, maxValue = info[info.length - 1].time;
		$('.progress').each(function() {
			var $labels = $(this).find('.progress-toplabels > .progress-labels-wrapper > .progress-mslabel');
			var $mss = $(this).find('.progress-wrapper > .progress-bar > .progress-mss-wrapper > .progress-mss > .progress-ms');
			var $curr = $(this).find('.progress-wrapper > .progress-bar > .progress-curr');
			if ($mss.length && $labels.length && $curr.length) {
				var currLeft = $curr.offset().left;
				var $firstLabel = $labels.first();
				var $lastLabel = $labels.last();
				var $firstMs = $mss.first();
				var $lastMs = $mss.last();

				var minPx = $firstMs.offset().left - currLeft;
				var maxPx = $lastMs.offset().left - currLeft;

				$curr.width((Date.now() - minValue) / (maxValue - minValue) * (maxPx - minPx) + minPx);

				while (info.length > $labels.length) {
					var $label = $('<span class="progress-mslabel"></span>');
					$lastLabel.before($label);
					$labels = $labels.add($label);
				}
				while (info.length < $labels.length) {
					var $label = $labels.eq(-2);
					$label.remove();
					$labels = $labels.not($label);
				}
				while (info.length > $mss.length) {
					var $ms = $('<span class="progress-ms"></span>');
					$lastMs.before($ms);
					$mss = $mss.add($ms);
				}
				while (info.length < $mss.length) {
					var $ms = $mss.eq(-2);
					$ms.remove();
					$mss = $mss.not($ms);
				}
				$labels.each(function(i) {
					var $label = $(this);
					var $ms = $mss.eq(i);
					var left = (info[i].time - minValue) / (maxValue - minValue) * (maxPx - minPx);// + minPx;
					$label.text(info[i].value || '');
					$ms.css('left', left);
					$label.css('left', left);
				});
			}
		});
	}
	function updateCountdown() {
		var d = milestones.getNextMilestoneTime() - Date.now();
		var finite = Number.isFinite(d);
		var hours, minutes, seconds = Math.round(d / 1000);

		if (seconds > 60) {
			$('#seconds').next().addBack().hide();
			minutes = Math.round(seconds / 60);
		} else {
			$('#seconds').text(('0' + (seconds % 60)).slice(-2));
			$('#seconds').next().text(seconds === 1 ? 'second' : 'seconds');
			$('#seconds').next().addBack().show();
			minutes = Math.floor(seconds / 60);
		}
		hours = Math.floor(minutes / 60);
		days = Math.floor(hours / 24);
		minutes %= 60;
		hours %= 24;

		$('#minutes').text(finite ? ('0' + minutes).slice(-2) : '∞');
		$('#minutes').next().text(minutes === 1 ? 'minute' : 'minutes');
		$('#hours').text(finite ? ('0' + hours).slice(-2) : '∞');
		$('#hours').next().text(hours === 1 ? 'hour' : 'hours');
		$('#days').text(days < 100 ? ('00' + days).slice(-3) : finite ? days : '∞');
		$('#days').next().text(days === 1 ? 'day' : 'days');

		$('#field-next-milestone').text(!finite ? 'Never' : !days ? 'Today' : days + ' ' + (days === 1 ? 'Day' : 'Days'));
		$('#field-next-milestone').attr('title', !finite ? 'Ever' : formatTimespan(d));
	}

});
