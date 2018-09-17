import { cons } from 'hexlet-pairs';
import { getRandomNumber } from '../maths';
import game from '..';

const description = 'What is the result of the expression?';

const askQuestion = () => {
  const numberOne = getRandomNumber(100);
  const numberTwo = getRandomNumber(100);
  const numberThree = getRandomNumber(3);
  let number = 0;
  let expression = '';
  if (numberThree === 1) {
    number = numberOne + numberTwo;
    expression = `${numberOne} + ${numberTwo}`;
  } else if (numberThree === 2) {
    number = numberOne - numberTwo;
    expression = `${numberOne} - ${numberTwo}`;
  } else {
    number = numberOne * numberTwo;
    expression = `${numberOne} * ${numberTwo}`;
  }
  const question = expression;
  const answer = `${number}`;

  return cons(question, answer);
};

const gameCalc = () => game(description, askQuestion);

export default gameCalc;
