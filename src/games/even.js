import readlineSync from 'readline-sync';
import { getRandomNumber } from '../units/maths';
import { welcome, isWrong, isResult } from '../units/dialog';

export default () => {
  welcome('Answer "yes" if number even otherwise answer "no".');
  const validate = (number, question) => {
    const isEven = number % 2 === 0;
    const isYes = question === 'yes';
    const isNo = question === 'no';
    const isCorrect = (isEven && isYes) || (!isEven && isNo);
    if (isCorrect) {
      console.log('Correct!');
    } else if (isEven && !isYes) {
      isWrong(question, 'yes');
      return false;
    } else if (!isEven && !isNo) {
      isWrong(question, 'no');
      return false;
    }
    return true;
  };
  let result = 0;
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomNumber(100);
    console.log(`'Question:' ${number}`);
    const question = readlineSync.question('Your answer: ');
    if (!validate(number, question)) {
      break;
    } else result += 1;
  }
  isResult(result);
};
