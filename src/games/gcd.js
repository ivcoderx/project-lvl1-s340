import { cons } from 'hexlet-pairs';
import { getRandomNumber } from '../maths';
import game from '..';

const description = 'Find the greatest common divisor of given numbers.';
const getGCD = (a, b) => (!b ? a : getGCD(b, a % b));

const askQuestion = () => {
  const numberOne = getRandomNumber(100);
  const numberTwo = getRandomNumber(100);

  const question = `${numberOne} ${numberTwo}`;
  const answer = getGCD(numberOne, numberTwo);

  return cons(question, answer);
};

const gameGCD = () => game(description, askQuestion);

export default gameGCD;
