(function() {
	var states = ['unset', 'one', 'two', 'three', 'all'];
	var $nodes = $(states.map(function(state) {
		return '#daygrid li.' + state;
	}).join(', '));
	var schedule = $nodes.get().map(function(){ return 0; });
	display();

	$nodes.click(function() {
		var index = $nodes.index(this);
		this.classList.remove(states[schedule[index]]);
		schedule[index] = (schedule[index] + 1) % states.length;
		this.classList.add(states[schedule[index]]);
		document.getElementsByName('schedule')[0].value = JSON.stringify(schedule);
	});

	function display() {
		$nodes.each(function(i, node) {
			node.classList.remove.apply(node.classList, states);
			node.classList.add(states[schedule[i]]);
		});
	}

	window.updateSchedule = function() {
		try {
			var newSchedule = JSON.parse(document.getElementsByName('schedule')[0].value);
			if (newSchedule instanceof Array && newSchedule.length === schedule.length && newSchedule.every(function(s) {
				return typeof s === 'number' && s >= 0 && s < states.length;
			})) {
				schedule = newSchedule;
			}
		} catch (e) {}
		display();
	};
}());