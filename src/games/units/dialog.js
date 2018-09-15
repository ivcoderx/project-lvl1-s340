import readlineSync from 'readline-sync';
import { getRandomOperator, getRandomNumber, getGCD } from './maths';

let userName = '';
const welcome = (descript) => {
  console.log(`'Welcome to Brain Games! \n' ${descript}`);
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
const isWrong = (question, answer) => console.log(`'${question}' is wrong answer ;(. Correct answer was '${answer}'`);

const validate = (number, question) => {
  const isEven = number % 2 === 0;
  const isYes = question === 'yes';
  const isNo = question === 'no';
  const isCorrect = (Number(number) === Number(question)) || (isEven && isYes) || (!isEven && isNo);
  if (isCorrect) {
    console.log('Correct!');
  } else if (!isCorrect) {
    isWrong(question, number);
    return false;
  } else if (isEven && !isYes) {
    isWrong(question, 'yes');
    return false;
  } else if (!isEven && !isNo) {
    isWrong(question, 'no');
    return false;
  }
  return true;
};

const isResult = (result) => {
  const goodBye = end => console.log(`${end} ${userName}`);
  if (result < 3) {
    goodBye('Let\'s try again, ');
  } else goodBye('Congratulations, ');
};

const questions = (name) => {
  let result = 0;
  for (let i = 1; i <= 3; i += 1) {
    const numberOne = getRandomNumber(100);
    const numberTwo = getRandomNumber(100);
    let number = 0;
    let expression = '';
    switch (name) {
      case 'calc':
        if (getRandomOperator()) {
          expression = `${numberOne} + ${numberTwo}`;
          number = numberOne + numberTwo;
        } else {
          expression = `${numberOne} - ${numberTwo}`;
          number = numberOne - numberTwo;
        }
        break;
      case 'even':
        expression = `${numberOne}`;
        number = numberOne;
        break;
      case 'gcd':
        number = getGCD(numberOne, numberTwo);
        expression = `${numberOne} ${numberTwo}`;
        break;
      default:
        number = 0;
        expression = `${number}`;
    }
    console.log(`'Question:' ${expression}`);

    const answer = readlineSync.question('Your answer: ');
    if (!validate(number, answer)) {
      break;
    } else result += 1;
  }
  isResult(result);
};
export { welcome, validate, questions };
