import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const dialogs = (asking) => {
  for (let i = 1; i <= 3; i += 1) {
    const ask = asking();
    const question = car(ask);
    console.log(`Question: ${question}`);

    const answer = String(cdr(ask));
    const yourAnswer = readlineSync.question('Your answer: ');

    if (yourAnswer !== answer) {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};

const game = (description, asking) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);

  const isResult = dialogs(asking);

  if (isResult) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Let's try again, ${username}!`);
  }
};


export default game;
