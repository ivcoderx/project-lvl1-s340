var readlineSync = require('readline-sync');

export default () => {
	console.log("Welcome to the Brain Games!");
	var userName = readlineSync.question('May I have your name? ');
	console.log('Hello, ' + userName + '!');
};
