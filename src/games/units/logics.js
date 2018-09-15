import { sumDigit } from './maths';

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

export default balance;
