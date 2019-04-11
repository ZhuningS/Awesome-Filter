var questions = {
	'cpr': {
		before: function() {
			return !stats.getEvents(['cummed', 'milked', 'ruined'], today().getTime()).length;
		},
		question: 'Do you need to report another CPR?',
		answers: {
			cummed: 'Cummed',
			milked: 'Prostate Milked',
			ruined: 'Ruined',
			no: 'No'
		},
		values: function() {
			return [cums.length, milks.length, ruins.length, 0];
		},
		after: function(answer) {
			if (answer !== 'no') {
				stats.addEvent(answer);
			}
		}
	},
	'feel': {
		before: function() {
			return false;
		},
		after: function(answer) {
			stats.addEvent('feeled', Date.now(), answer);
		}
	},
	'peoply-nearby': {
		question: 'How many people are near you?',
		color: 'gray',
		answers: {
			0: '0',
			1: '1-2',
			3: '3-5',
			6: '6+'
		}
	},
	'watched-porn': 'Have you looked at porn recently?',
	'touched': 'Have you touched yourself recently?',
	'masturbated': 'Have you masturbated recently?',
	'desperate': 'Are you desperate to cum?',
	'slept-well': {
		question: 'How well did you sleep?',
		color: 'purple',
		answers: {
			ok: 'OK',
			great: 'Great',
			poorly: 'Poorly'
		}
	}
};

function makeQuestion(id) {
	var question, answers;
	if (typeof questions[id] === 'string') {
		questions[id] = {question: questions[id]};
	}
	if (questions[id].html) {
		return $(questions[id].html);
	}
	question = questions[id].question;
	if (questions[id].answers) {
		if (Array.isArray(questions[id].answers)) {
			answers = {};
			questions[id].answers.forEach(answer => answers[answer.toLowerCase()]);
			questions[id].answers = answers;
		} else {
			answers = questions[id].answers;
		}
	}
	if (!answers) {
		questions[id].answers = {yes: 'Yes', no: 'No'};
		answers = questions[id].answers;
	}
	Object.keys(answers).forEach(function(answer) {
		if (typeof answers[answer] === 'string') {
			answers[answer] = {text: answers[answer]};
		}
	});
	if (!questions[id].color) {
		Object.keys(answers).forEach(function(answer, i, all) {
			if (i === 0) {
				answers[answer].color = answers[answer].color || 'red';
			} else if (i === 1) {
				if (all.length < 3) {
					answers[answer].color = answers[answer].color || 'blue';
				} else {
					answers[answer].color = answers[answer].color || 'brown';
				}
			} else if (i === 2) {
				answers[answer].color = answers[answer].color || 'blue';
			} else {
				answers[answer].color = answers[answer].color || 'green';
			}
		});
	} else {
		Object.keys(answers).forEach(function(answer, i, all) {
			answers[answer].color = answers[answer].color || questions[id].color + ['Light', 'Medium', 'Dark', 'DarkRoast'][i];
		});
	}
	var c = 'c3'; // 'c' + Object.keys(answers).length
	return $('<ul>').attr('data-question', id).append(
		$('<li>').addClass('noSelect').append(
			$('<h3>').addClass('bold').text(question.toUpperCase())
		),
		$('<div>').addClass('c3').append(
			Object.keys(answers).map(function(answer, i, all) {
				return $('<div>').attr('data-answer', answer).addClass('c3_col' + (i + 1 === all.length ? 'End' : i + 1)).addClass('c_' + answers[answer].color).append(
					$('<div>').addClass('c_label').text(answers[answer].text),
					$('<div>').addClass('c_percent')
				);
			})
		)
	);
}

var currentQuestion;
function initQuestions() {
	$('#questions > [data-question]').each(function() {
		var question = $(this).data('question');
		var $tmp = $('<div>');
		$tmp.append($(this));
		if (!questions[question]) {
			questions[question] = {};
		}
		questions[question].html = $tmp.html();
		/*if (!questions[question].answers) {
			questions[question].answers = {};
			$(this).find('[data-answer]').each(function() {
				return questions[question].answers[$(this).data('answer')] = $(this).text();
			});
		}*/
	});

	askSomething();
	function askSomething() {
		var now = new Date();
		// No question from 2am until 6am.
		if (2 <= now.getHours() && now.getHours() < 6) {
			return false;
		}

		var veryRecently = new Date();
		veryRecently.setHours(veryRecently.getHours() - 1);
		// Only at most one question per hour.
		if (stats.getEvents('answered', veryRecently.getTime()).length) {
			return false;
		}

		var question = 'cpr';
		var open = Object.keys(questions);
		while (!useQuestion(question)) {
			open.splice(open.indexOf(question), 1);
			if (!open.length) {
				return false;
			}
			question = open[Math.floor(Math.random() * open.length)];
		}
		var $question = makeQuestion(question);
		$question.find('[data-answer]').click(function() {
			var answer = $(this).data('answer');
			if (!questions[question].after || questions[question].after(answer) !== false) {
				stats.addEvent('answered', Date.now(), {question: question, answer: answer});
				$question.remove();
				currentQuestion = null;
				askSomething();
			}
		});
		$('#questions').append($question);
		if (questions[question].answers) updatePercent();

		currentQuestion = {
			update: updatePercent
		};

		return true;


		function updatePercent() {
			var minWidth = 60;
			var minCssPercent = Math.ceil(minWidth / $question.children('div').width() * 100);
			var answers = Object.keys(questions[question].answers);
			var absolute;
			if (questions[question].values) {
				absolute = questions[question].values();
			} else {
				absolute = answers.map(a => 0);
				stats.getEvents('answered').filter(e => e.value.question === question).forEach(e => absolute[answers.indexOf(e.value.answer)]++);
			}
			var total = absolute.reduce((a, b) => a + b);
			if (total) {
				var percents = absolute.map(abs => Math.round(abs / total * 100));
				var cssPercents = percents.map(p => Math.round(minCssPercent + p * (100 - percents.length * minCssPercent) / 100));
			} else {
				cssPercents = absolute.map(p => Math.round(100 / absolute.length));
			}
			var $answerDivs = $question.find('[data-answer]');
			answers.forEach(function(answer, i, all) {
				var $div = $answerDivs.filter('[data-answer="' + answer + '"]');
				if (i < all.length - 1) $div.width(cssPercents[i] + '%');
				$div.find('.c_percent').text(percents && percents[i] ? percents[i] + '%' : '');
			});
		}
	}
	function useQuestion(question) {
		if (stats.getEvents('answered', today().getTime()).some(function(e) {return e.value.question === question;})) {
			return false;
		}
		if (questions[question].before && questions[question].before() === false) {
			return false;
		}
		return true;
	}
}