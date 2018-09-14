import readlineSync from 'readline-sync';
import { getRandomOperator, getRandomNumber } from '../units/maths';
import { welcome, isWrong, isResult } from '../units/dialog';

export default () => {
  welcome('What is the result of the expression?');
  const validate = (number, question) => {
    const isCorrect = Number(number) === Number(question);
    if (isCorrect) {
      console.log('Correct!');
    } else if (!isCorrect) {
      isWrong(question, number);
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
  isResult(result);
};
