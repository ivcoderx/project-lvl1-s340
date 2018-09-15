import readlineSync from 'readline-sync';
import { getRandomNumber, getGCD } from './units/maths';
import { welcome, validate, isResult } from './units/dialog';

export default () => {
  welcome('Find the greatest common divisor of given numbers.');
  let result = 0;
  for (let i = 1; i <= 3; i += 1) {
    const numberOne = getRandomNumber(100);
    const numberTwo = getRandomNumber(100);
    let number = 0;
    number = getGCD(numberOne, numberTwo);
    console.log(`'Question:' ${numberOne} ${numberTwo}`);
    const question = readlineSync.question('Your answer: ');
    if (!validate(number, question)) {
      break;
    } else result += 1;
  }
  isResult(result);
};
