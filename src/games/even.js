import readlineSync from 'readline-sync';
import { getRandomNumber } from '../units/maths';
import { welcome, userName } from '../units/dialog';

export default () => {
  console.log(`${welcome} Answer "yes" if number even otherwise answer "no".`);
  console.log(`Hello, ${userName}!`);
  const validate = (number, question) => {
    const isEven = number % 2 === 0;
    const isYes = question === 'yes';
    const isNo = question === 'no';
    const isCorrect = (isEven && isYes) || (!isEven && isNo);
    const isWrong = `'${question}' is wrong answer ;(. Correct answer was`;
    if (isCorrect) {
      console.log('Correct!');
    } else if (isEven && !isYes) {
      console.log(`${isWrong} 'yes'.`);
      return false;
    } else if (!isEven && !isNo) {
      console.log(`${isWrong} 'no'.`);
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
  if (result < 3) {
    console.log(`Let's try again, ${userName}!`);
  } else console.log(`Congratulations, ${userName}!`);
};
