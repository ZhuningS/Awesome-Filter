var tickets = (function(s) {
	var issued;
	stats.listen('ticket-issued', function(events) {
		events.forEach(function(e) {
			issued.push(e.value);
		});
	});
	stats.listen('reset', reset);
	milestones.listen('milestone', function({type, time, value: {stage, index}}) {
		var info = milestones.getMilestone(stage, index);
		if (['day', 'month', 'year'].includes(info.unit) && !issued.some(function(issued) {
			return issued.unit === info.unit && issued.value === info.value;
		})) {
			stats.addEvent('ticket-issued', time, {
				unit: info.unit,
				value: info.value
			});
		}
	});
	reset();
	return {
		getTickets: function() {
			return issued.map(function(issued) {
				return {
					unit: issued.unit,
					value: issued.value,
					redeemed: false
				};
			});
		}
	};
	function reset() {
		issued = stats.getEvents('ticket-issued').map(function(e) {
			return e.value;
		});
	}
}());