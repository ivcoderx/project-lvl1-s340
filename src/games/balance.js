import { cons } from 'hexlet-pairs';
import { getRandomNumber, sumDigit } from '../maths';
import game from '..';

const description = 'Balance the given number.';
const balance = (number) => {
  const n = String(number).length;
  let sum = sumDigit(number);
  let average = 0;
  let result = '';
  for (let i = n; i > 0; i -= 1) {
    average = Math.floor(sum / i);
    sum -= average;
    result = String(result) + String(average);
  }
  return result;
};

const asking = () => {
  const number = getRandomNumber(100) * getRandomNumber(100);
  const question = `${number}`;
  const answer = balance(number);

  return cons(question, answer);
};

const gameBalance = () => game(description, asking);

export default gameBalance;
