import { cons } from 'hexlet-pairs';
import { getRandomNumber } from '../maths';
import game from '..';

const description = 'Is this number prime?';

const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i < Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const askQuestion = () => {
  const question = getRandomNumber(100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

const gamePrime = () => game(description, askQuestion);

export default gamePrime;
