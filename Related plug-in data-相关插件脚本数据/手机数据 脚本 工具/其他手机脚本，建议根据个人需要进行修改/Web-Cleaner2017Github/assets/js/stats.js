var stats = chrome.extension.getBackgroundPage().stats;
var weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var startPeriod = new Date(), endPeriod = new Date();
startPeriod.setMonth(startPeriod.getMonth() - 1);
endPeriod.setMonth(endPeriod.getMonth() + 1);

var orgasms = stats.getEvents(['cummed', 'milked', 'ruined'], startPeriod.getTime(), endPeriod.getTime());
var cums = orgasms.filter(orgasm => orgasm.type === 'cummed');
var milks = orgasms.filter(orgasm => orgasm.type === 'milked');
var ruins = orgasms.filter(orgasm => orgasm.type === 'ruined');
var lastOrgasm = null, edgesSince, longestStreak, frequentRelapse, relapseDays;
var installDate = stats.getEvents('installed')[0].time;

var feelings = {
	happy: {title: 'Happy'},
	unhappy: {title: 'Unhappy'},
	shocked: {title: 'Shocked'},
	angry: {title: 'Angry'},
	upset: {title: 'Upset'},
	unsure: {title: 'Unsure'},
	stressed: {title: 'Stressed'},
	frustrated: {title: 'Frustrated'},
	turnedOn: {title: 'Turned On'},
	addicted: {title: 'Addicted'},
	bored: {title: 'Bored'},
	hero: {title: 'I can do it!'}
};

function today() {
	var today = new Date();
	// Today starts between 2am and 6am.
	if (today.getHours() < 2) {
		today.setDate(today.getDate() - 1);
	}
	today.setHours(6);
	today.setMinutes(0);
	today.setSeconds(0);
	return today;
}

var feels = stats.getEvents('feeled', startPeriod.getTime(), endPeriod.getTime());

$(document).ready(function() {
	stats.listen(['cummed', 'milked', 'ruined'], startPeriod.getTime(), endPeriod.getTime(), function() {
		updateStuff();
		updateDoughnut();
	});
	stats.listen(['edged'], startPeriod.getTime(), endPeriod.getTime(), function() {
		updateStuff();
	});
	stats.listen(['feeled'], startPeriod.getTime(), endPeriod.getTime(), function(feels) {
		updateFeels(feels);
	});
	stats.listen(['installed'], function(events) {
		lastOrgasm = null;
		installDate = events.pop().time;
		feels = stats.getEvents('feeled', startPeriod.getTime(), endPeriod.getTime());
		updateFeels(feels);
		updateStuff();
		updateDoughnut();
	});

	var lastOrgasmInterval;
	function updateLastOrgasm() {
		$('#field-last-orgasm').attr('title', lastOrgasm ? formatTimespan(Date.now() - lastAnythingTime) + ' ago' : 'ever');
	}
	$('#field-last-orgasm').mouseenter(function() {
		lastOrgasmInterval = setInterval(updateLastOrgasm, 1000);
	}).mouseleave(function() {
		clearInterval(lastOrgasmInterval);
	});

	var longestStreakInterval;
	function updateLongestStreak() {
		var timeSinceLastAnything = Date.now() - lastAnythingTime;
		if (longestStreak < timeSinceLastAnything) {
			longestStreak = timeSinceLastAnything;
		}
		$('#field-longest-streak').attr('title', formatTimespan(longestStreak));
	}
	$('#field-longest-streak').mouseenter(function() {
		longestStreakInterval = setInterval(updateLongestStreak, 1000);
	}).mouseleave(function() {
		clearInterval(longestStreakInterval);
	});

	updateStuff();
	updateFeels(feels);
	initDoughnut();
	initBoxes();
	initQuestions();
});

var lastAnythingTime;
function updateStuff() {
	orgasms = stats.getEvents(['cummed', 'milked', 'ruined'], startPeriod.getTime(), endPeriod.getTime());
	cums = orgasms.filter(orgasm => orgasm.type === 'cummed');
	milks = orgasms.filter(orgasm => orgasm.type === 'milked');
	ruins = orgasms.filter(orgasm => orgasm.type === 'ruined');

	lastOrgasm = orgasms[orgasms.length - 1];
	lastAnythingTime = (lastOrgasm && lastOrgasm.time) || installDate;
	var timeSinceLastAnything = Date.now() - lastAnythingTime;
	longestStreak = 0;

	/* Wtf is this code?
	orgasms.forEach(function(a, b) {
		if (b.time - a.time > longestStreak) {
			longestStreak = b.time - a.time;
		}
		return b;
	});*/
	var relapseDays = weekdays.map(function() { return 0; });
	orgasms.forEach(function(event, i) {
		var streak = i && (event.time - orgasms[i - 1].time);
		if (streak > longestStreak) {
			longestStreak = streak;
		}

		relapseDays[new Date(event.time).getDay()]++;
	});

	if (longestStreak < timeSinceLastAnything) {
		longestStreak = timeSinceLastAnything;
	}
	var longestStreakDays = Math.floor(longestStreak / (24*60*60*1000));

	frequentRelapse = weekdays[relapseDays.indexOf(Math.max.apply(null, relapseDays))];

	edgesSince = stats.getEvents('edged', lastOrgasm && lastOrgasm.time);

	$('#field-last-orgasm').text(lastOrgasm ? formatDateShort(new Date(lastOrgasm.time - startOfDay)) : 'Never');
	$('#field-last-orgasm').attr('title', lastOrgasm ? formatTimespan(timeSinceLastAnything) + ' ago' : 'Ever');
	$('#field-edges-since-last-orgasm').text(edgesSince.length);
	$('#field-longest-streak').text(longestStreakDays === 1 ? '1 Day' : longestStreakDays + ' Days');
	$('#field-longest-streak').attr('title', formatTimespan(longestStreak));
	$('#field-frequent-relapse').text(lastOrgasm ? frequentRelapse : '-');
	if (currentQuestion) {
		currentQuestion.update();
	}
}

function formatDateShort(d) {
    return [d.getMonth() + 1, d.getDate(), String(d.getFullYear()).slice(-2)].join('/');
}

function formatTimespan(ms) {
	var parts = [];
	if (ms < 0) {
		ms = 0;
	}
	var seconds = Math.floor(ms / 1000);
	var minutes = Math.floor(seconds / 60);
	seconds -= minutes * 60;
	parts.push(seconds === 1 ? '1 second' : seconds + ' seconds');
	if (minutes) {
		var hours = Math.floor(minutes / 60);
		minutes -= hours * 60;
		parts.push(minutes === 1 ? '1 minute' : minutes + ' minutes');
		if (hours) {
			var days = Math.floor(hours / 24);
			hours -= days * 24;
			parts.push(hours === 1 ? '1 hour' : hours + ' hours');
			if (days) {
				parts.push(days === 1 ? '1 day' : days + ' days');
			}
		}
	}
	return parts.reverse().join(', ');
}

function updateFeels(feels) {
	var summary = {};
	feels.forEach(function(feel) {
		summary[feel.value] = (summary[feel.value] || 0) + 1;
	});
	$('#field-mood').text(feels.length ? feelings[feels[feels.length - 1].value].title : 'Undecided');
	$('[data-feel]').each(function() {
		$(this).text((summary[$(this).data('feel')] || 0).toLocaleString());
	});
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
		updateStuff();
	}
}