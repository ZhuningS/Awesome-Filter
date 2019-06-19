
var milestones = (function(s) {
	var s = [
		{ unit: 'second',  values: [30, 60] },
		{ unit: 'minute',  values: [2, 5, 15, 30, 45] },
		{ unit: 'hour',  values: [1, 4, 8, 16, 24, 36] },
		{ unit: 'day',   values: [2, 5, 10, 14, 21] },
		{ unit: 'day',   values: [30, 45, 60, 75, 90, 120, 180, 270] },
		{ unit: 'month', values: [12, 18, 24, 48, 84] },
		{ unit: 'year',  values: [10, 15, 20, 30, 40, 50, 75] },
		{ unit: 'year',  values: [100] },
		{ unit: 'year',  values: [200, 500] },
		{ unit: 'year',  values: [1000, Infinity] }
	];
	var props = {milli: 'Milliseconds', second: 'Seconds', minute: 'Minutes', hour: 'Hours', day: 'Date', month: 'Month', year: 'FullYear'};
	var currentStage; // index
	var nextMilestone; // timestamp
	var installDate = stats.getEvents('installed')[0].time;
	var lastOrgasm = stats.getEvents(['cummed', 'milked', 'ruined']).pop();
	var listeners = new Map();
	var reset = true;
	stats.listen(['cummed', 'milked', 'ruined'], function(events) {
		lastOrgasm = events.pop();
		reset = true;
		milestones.update();
	});
	stats.listen('installed', function(events) {
		lastOrgasm = stats.getEvents(['cummed', 'milked', 'ruined']).pop();
		installDate = events.pop().time;
		reset = true;
		milestones.update();
	});
	return {
		startNotify: function() {
			milestones.listen('milestone', notify);
		},
		stopNotify: function() {
			milestones.unlisten('milestone', notify);
		},
		update: function() {
			updateMilestone();
			schedule();
		},
		getBasis: function() {
			return lastOrgasm ? lastOrgasm.time : installDate;
		},
		getMilestones: function(basis) {
			var mss = [];
			s.forEach(function(stageInfo, stage) {
				stageInfo.values.forEach(function(value, i) {
					mss.push({
						stage: stage,
						index: i,
						value: value,
						unit: stageInfo.unit,
						name: milestones.name(stage, i),
						time: fromUnit(value, stageInfo.unit, basis)
					});
				});
			});
			return mss;
		},
		getCurrentStage: function() {
			updateMilestone();
			var stage = currentStage;
			return {
				unit: s[stage].unit,
				getInfo: function() {
					var values = s[stage].values.slice();
					//if (stage === 0) {
						values.unshift(0);
					//}
					if (stage + 1 < s.length) {
						values.push(convertUnit(s[stage + 1].values[0], s[stage + 1].unit, s[stage].unit));
						if (!(values[values.length - 2] < values[values.length - 1])) {
							console.error('error converting s[' + (stage+1) + '].values[0] (' + s[stage + 1].values[0] + ') from ' + s[stage+1].unit + 's to ' + s[stage].unit + 's -> ' + values[values.length - 1]);
						}
					}
					var mss = values.map(function(value) {
						return {
							value: value,
							unit: s[stage].unit,
							time: fromUnit(value, s[stage].unit)
						};
					});
					mss.unit = s[stage].unit;
					return mss;
				}
			};
		},
		getNextMilestoneTime: function() {
			updateMilestone();
			return nextMilestone;
		},
		getLast: function() {
			updateMilestone();
			var ms = getNextMilestone();
			ms.i -= 1;
			return ms.i < 0 ? null : {
				stage: ms.stage,
				i: ms.i,
				value: s[ms.stage].values[ms.i],
				unit: s[ms.stage].unit,
				time: getMilestoneTime(ms.stage, ms.i),
				name: this.name(ms.stage, ms.i)
			};
		},
		name: function(stage, i) {
			while (s[stage].values.length <= i) {
				i -= s[stage].values.length;
				stage += 1;
			}
			return s[stage].values[i] + ' ' + s[stage].unit + (s[stage].values[i] === 1 ? '' : 's');
		},
		listen: function(names, listener) {
			if (!Array.isArray(names)) {
				names = [names];
			}
			names.forEach(function(name) {
				if (!listeners.has(name)) {
					listeners.set(name, [listener]);
					if (['stage', 'milestone'].indexOf(name) >= 0) {
						schedule();
					}
				} else if (listeners.get(name).indexOf(listener) < 0) {
					listeners.get(name).push(listener);
				}
			});
		},
		unlisten: function(names, listener) {
			if (!Array.isArray(names)) {
				names = [names];
			}
			names.forEach(function(name) {
				if (listeners.has(name)) {
					var index = listeners.get(name).indexOf(listener);
					if (index >= 0) {
						listeners.get(name).splice(index, 1);
						if (!listeners.get(name).length) {
							listeners.delete(name);
							if (['stage', 'milestone'].indexOf(name) >= 0) {
								schedule();
							}
						}
					}
				}
			});
		},
		time: {
			add: add,
			fromUnit: fromUnit,
			toUnit: toUnit,
			convertUnit: convertUnit
		}
	};
	var timeout;
	function schedule() {
		if (timeout) {
			clearTimeout(timeout);
			timeout = null;
		}
		if (listeners.has('stage') || listeners.has('milestone')) {
			updateMilestone();
			timeout = setTimeout(function() {
				timeout = null;
				milestones.update();
			}, nextMilestone - Date.now());
		}
	}
	function trigger(name, time, value) {
		if (listeners.has(name)) {
			if (!time) {
				time = Date.now();
			}
			listeners.get(name).slice().forEach(function(listener) {
				try {
					listener({type: name, time: time, value: value});
				} catch (e) {
					console.error(e);
					milestones.unlisten(name, listener);
				}
			});
		}
	}
	function notify() {
		var ms = getNextMilestone();
		chrome.notifications.create({
			type: "basic",
			title: "Milestone Reached",
			message: "Congratulations! You didn't orgasm for " + milestones.name(ms.stage, ms.i - 1) + ". Keep up the good work!",
			iconUrl: "assets/img/logo-128.png",
			eventTime: Date.now()
		}, function(){});
	}
	function updateMilestone() {
		var ms = getNextMilestone();
		var timestamp = getMilestoneTime(ms.stage, ms.i);
		var newStage, newMilestone, lastMilestone = nextMilestone;
		if (timestamp > nextMilestone) {
			newMilestone = true;
			if (ms.i === 1) {
				newStage = true;
			}
		} else if (timestamp < nextMilestone) {
			reset = true;
		}
		currentStage = ms.stage;
		nextMilestone = timestamp;
		if (reset) {
			reset = false;
			trigger('reset');
		} else {
			if (newStage) trigger('stage', lastMilestone);
			if (newMilestone) {
				trigger('milestone', lastMilestone, {
					stage: ms.stage,
					index: ms.i - 1
				});
			}
		}
	}
	function getNextMilestone() {
		var now = Date.now();
		for (var stage = 0; stage < s.length; ++stage) {
			if (now < getMilestoneTime(stage, s[stage].values.length)) {
				break;
			}
		}
		if (s.length <= stage) {
			stage = s.length - 1;
			i = s[stage].values.length - 1;
		} else {
			for (var i = 0; i <= s[stage].values.length; ++i) {
				if (now < getMilestoneTime(stage, i)) {
					break;
				}
			}
		}
		return {stage: stage, i: i};
	}
	function getMilestoneTime(stage, i) {
		while (stage < s.length && s[stage].values.length <= i) {
			i -= s[stage].values.length;
			stage += 1;
		}
		if (s.length <= stage) {
			stage = s.length - 1;
			i = s[stage].values.length - 1;
		}
		if (Number.isFinite(s[stage].values[i])) {
			var d = new Date(lastOrgasm ? lastOrgasm.time : installDate);
			add(d, s[stage].unit, s[stage].values[i]);
			return d.getTime();
		} else {
			return s[stage].values[i];
		}
	}
	function convertUnit(value, from, to) {
		if (from === to) {
			return value;
		}
		return toUnit(fromUnit(value, from), to);
	}
	function fromUnit(value, from, basis) {
		if (!Number.isFinite(value)) {
			return value;
		}
		if (typeof basis === 'object' && basis !== null) {
			basis = basis.getTime();
		} else if (typeof basis !== 'number') {
			basis = lastOrgasm ? lastOrgasm.time : installDate;
		}
		var d = new Date(basis);
		add(d, from, value);
		return d.getTime();
	}
	function toUnit(value, to, basis) {
		if (typeof basis === 'object' && basis !== null) {
			basis = basis.getTime();
		} else if (typeof basis !== 'number') {
			basis = lastOrgasm ? lastOrgasm.time : installDate;
		}
		var d = new Date(value);
		var result = 0;
		while (d.getTime() > basis) {
			var x = 1; // pretty dumb
			result += x;
			add(d, to, -x);
		}
		return result;
	}
	function add(date, unit, value) {
		set(date, unit, get(date, unit) + value);
		function get(date, unit) {
			return Date.prototype['getUTC' + props[unit]].call(date);
		}
		function set(date, unit, value) {
			Date.prototype['setUTC' + props[unit]].call(date, value);
		}
	}
}());

milestones.startNotify();