let readlineSysnc = require('readline-sync');
const chalk = require('chalk');
let name = readlineSysnc.question('Enter your name\n');
let score = 0;

// data of high score
var highScores = [
	{
		name: 'Neha',
		score: 7
	},

	{
		name: 'Jay',
		score: 6
	}
];

// array of objects
questions = [
	{
		question: 'Where is neha based on?',
		answer: 'Noida'
	},
	{
		question: "What's her favourite food?",
		answer: 'Rajma Chawal'
	},
	{
		question: "What's her star sign?",
		answer: 'Gemini'
	},
	{
		question: "Ok, what's her birth month?",
		answer: 'June'
	},
	{
		question: "What's Her favourite song?",
		answer: 'Numa Numa'
	},
	{
		question: 'Where is she working now?',
		answer: 'Accenture'
	},
	{
		question: "What's her birth place?",
		answer: 'agra'
	}
];

function validateSol(question, answer) {
	let user_answer = readlineSysnc.question(question + '\n');
	if (answer.toUpperCase() === user_answer.toUpperCase()) {
		console.log(chalk.green('WOAH! CORRECT'));
		score += 1;
	} else {
		console.log(chalk.red('buhu! WRONG'));
	}
	console.log('Current score: ' + score);
	console.log('===========================');
	if (score === 3) {
		console.log(chalk.blue('[[[[UNLOCKED LEVEL 1!!]]]]'));
	} else if (score === 5) {
		console.log(chalk.yellow('~~~WOAH! LEVEL 2!!!!~~~'));
	} else if (score == 6) {
		console.log(chalk.green('++++FINAL LEVEL!!!!!++++'));
	}
}

function welcome() {
	console.log(
		chalk.green(
			'Heylo ' +
				name +
				"! Let's commence the game." +
				chalk.blue.underline.bold(
					"\n'Kaun hai Neha ka Ultimate friend?' muahhah!!"
				)
		)
	);
	console.log('\n===========================');
}

function game() {
	for (let i = 0; i < questions.length; i++) {
		var currentQuestion = questions[i];
		validateSol(currentQuestion.question, currentQuestion.answer);
	}
}

function showScore() {
	console.log(
		chalk.blue.bgRed.bold(
			'Well ' +
				name +
				', your Final Score is: ' +
				score +
				'\nThanks for playing! :D'
		)
	);

	console.log(
		"Check out the high scores, if you should be there ping me and I'll update it"
	);
	highScores.map(sc => console.log(sc.name + '::' + sc.score));
}

welcome();
game();
showScore();
