import { cons } from 'hexlet-pairs';
import { getRandomNumber, getRandomBoolean } from '../maths';
import game from '..';

const description = 'What is the result of the expression?';

const asking = () => {
  const numberOne = getRandomNumber(100);
  const numberTwo = getRandomNumber(100);
  let number = 0;
  let expression = '';
  if (getRandomBoolean()) {
    number = numberOne + numberTwo;
    expression = `${numberOne} + ${numberTwo}`;
  } else {
    number = numberOne - numberTwo;
    expression = `${numberOne} - ${numberTwo}`;
  }
  const question = expression;
  const answer = `${number}`;

  return cons(question, answer);
};

const gameCalc = () => game(description, asking);

export default gameCalc;
