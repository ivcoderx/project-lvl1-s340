import { cons } from 'hexlet-pairs';
import { getRandomNumber, sumDigit } from '../maths';
import game from '..';

const description = 'Balance the given number.';

const balance = (sum, n) => {
  const average = Math.floor(sum / n);
  const result = String(average);
  if (n !== 1) {
    return String(result) + balance(sum - average, n - 1);
  } return result;
};

const askQuestion = () => {
  const number = getRandomNumber(100) * getRandomNumber(100);
  const question = `${number}`;
  const answer = balance(sumDigit(number), String(number).length);
  return cons(question, answer);
};

const gameBalance = () => game(description, askQuestion);

export default gameBalance;
