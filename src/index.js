import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const dialogs = (askQuestion, n) => {
  if (n !== 0) {
    const ask = askQuestion();
    const question = car(ask);
    console.log(`Question: ${question}`);

    const answer = String(cdr(ask));
    const yourAnswer = readlineSync.question('Your answer: ');

    if (yourAnswer !== answer) {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      return false;
    }
    console.log('Correct!');
    return dialogs(askQuestion, n - 1);
  }
  return true;
};

const game = (description, askQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);

  const isResult = dialogs(askQuestion, 3);

  if (isResult) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Let's try again, ${username}!`);
  }
};

export default game;
