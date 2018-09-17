import { cons } from 'hexlet-pairs';
import { getRandomNumber } from '../maths';
import game from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = n => n % 2 === 0;

const askQuestion = () => {
  const question = getRandomNumber(100);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

const gameEven = () => game(description, askQuestion);

export default gameEven;
