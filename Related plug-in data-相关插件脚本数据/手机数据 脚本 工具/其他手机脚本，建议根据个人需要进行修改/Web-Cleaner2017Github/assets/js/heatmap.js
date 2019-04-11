(function() {
	var data = {}, today, currentMonth, start, end;
	var milestones = chrome.extension.getBackgroundPage().milestones;

	today = new Date();
	if (today.getHours() < 2) {
		today.setDate(today.getDate() - 1);
	}
	today.setHours(0);
	today.setMinutes(0);
	today.setSeconds(0);

	currentMonth = new Date(today.getTime());
	currentMonth.setDate(1);

	start = new Date(currentMonth.getTime());
	start.setMonth(start.getMonth() - 4);

	end = new Date(currentMonth.getTime());
	end.setMonth(end.getMonth() + 2);
	end.setSeconds(-1);

	stats.getEvents(['cummed', 'milked', 'ruined'], start.getTime(), end.getTime()).forEach(function(event) {
		// Shift event time to make orgasms between 12am and 2am appear on the previous day.
		data[Math.floor((event.time - startOfDay) / 1000)] = 1;
	});

	stats.listen('installed', function() {
		cal.update({});
		update();
	});

	stats.listen(['cummed', 'milked', 'ruined'], start.getTime(), end.getTime(), function(events) {
		var data = {};
		events.forEach(function(event) {
			data[Math.floor((event.time - startOfDay) / 1000)] = 1;
		});
		cal.update(data, false, cal.APPEND_ON_UPDATE);
		update();
	});

	var updateTimeout;

	function update(when) {
		if (updateTimeout) {
			clearTimeout(updateTimeout);
			updateTimeout = null;
		}
		today = new Date();
		if (today.getHours() < 2) {
			today.setDate(today.getDate() - 1);
		}
		today.setHours(0);
		today.setMinutes(0);
		today.setSeconds(0);
		if (today.getMonth() !== currentMonth.getMonth()) {
			currentMonth = new Date(today.getTime());
			currentMonth.setDate(1);
			start = new Date(currentMonth.getTime());
			start.setMonth(start.getMonth() - 4);
			end = new Date(currentMonth.getTime());
			end.setMonth(end.getMonth() + 2);
			end.setSeconds(-1);
			cal.start(start);
			cal.end(end);
		}
		cal.highlight(getHighlights());
		var now = new Date();
		if (now.getHours() !== 1 || now.getMinutes() < 50) {
			scheduleUpdate(10*60*1000);
		} else {
			scheduleUpdate(Math.min(60*1000, 60*60*1000 - (now.getMinutes() * 60 + now.getSeconds() * 1000 + now.getMilliseconds())));
		}
	}

	function scheduleUpdate(when) {
		if (updateTimeout) {
			clearTimeout(updateTimeout);
		}
		updateTimeout = setTimeout(function() {
			updateTimeout = null;
			update();
		}, when);
	}

	function getHighlights() {
		var now = Date.now();
		var highlights = milestones.getMilestones().filter(function(ms) {
			return ms.time > now;
		}).map(function(ms) {
			return new Date(ms.time - 2*60*60*1000);
		});
		highlights.unshift(new Date(now - 2*60*60*1000));

		return highlights;
	}

	var cal = new CalHeatMap();  
	cal.init({
		domain: "month",
		domainLabelFormat: "%b '%y",
		subDomainDateFormat: "%m/%d/%Y",
		subDomain: "day",
		subDomainTitleFormat: {empty: "{date}", filled: "{count} {name}\n{date}"},
		cellSize: 18,
		data: data,
		subDomainTextFormat: "%d",
		range: 6,
		tooltip: true,
		weekStartOnMonday: false,
		displayLegend: true,
		legendVerticalPosition: "center",
		legendHorizontalPosition: "right",
		legendOrientation: "vertical",
		legendMargin: [0, 10, 0, 0],
		legend: [1, 2, 3, 4, 5],
		itemName: ["Orgasm", "Orgasms"],
		domainMargin: 10,
		animationDuration: 800,
		domainDynamicDimension: true,
		start: start,
		end: end,
		//maxDate: new Date(2017, 1),
		highlight: getHighlights(),
	}); 
}());