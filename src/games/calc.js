import readlineSync from 'readline-sync';
import { getRandomOperator, getRandomNumber } from '../units/maths';
import { welcome, userName } from '../units/dialog';

export default () => {
  console.log(`${welcome} What is the result of the expression?`);
  console.log(`Hello, ${userName}!`);
  const validate = (number, question) => {
    const isCorrect = Number(number) === Number(question);
    if (isCorrect) {
      console.log('Correct!');
    } else if (!isCorrect) {
      console.log(`'${question}' is wrong answer ;(. Correct answer was '${number}'.`);
      return false;
    }
    return true;
  };
  let result = 0;
  for (let i = 1; i <= 3; i += 1) {
    const numberOne = getRandomNumber(100);
    const numberTwo = getRandomNumber(100);
    let expression = '';
    let number = 0;
    if (getRandomOperator()) {
      expression = `${numberOne} + ${numberTwo}`;
      number = numberOne + numberTwo;
    } else {
      expression = `${numberOne} - ${numberTwo}`;
      number = numberOne - numberTwo;
    }
    console.log(`'Question:' ${expression}`);
    const question = readlineSync.question('Your answer: ');
    if (!validate(number, question)) {
      break;
    } else result += 1;
  }
  if (result < 3) {
    console.log(`Let's try again, ${userName}!`);
  } else console.log(`Congratulations, ${userName}!`);
};
