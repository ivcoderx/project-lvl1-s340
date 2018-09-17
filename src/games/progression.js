import { cons } from 'hexlet-pairs';
import { getRandomNumber } from '../maths';
import game from '..';

const description = 'What number is missing in this progression?';

const askQuestion = () => {
  const start = getRandomNumber(100);
  const step = getRandomNumber(5);
  const skip = getRandomNumber(10);
  let question = '';
  let answer = 0;
  for (let i = 1; i <= 10; i += 1) {
    if (i === skip) {
      question += ' .. ';
      answer = start + (step * i);
    } else {
      question += ` ${start + (step * i)} `;
    }
  }

  return cons(question, answer);
};

const gameProgression = () => game(description, askQuestion);

export default gameProgression;
