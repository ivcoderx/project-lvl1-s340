const getRandomNumber = max => Math.floor(Math.random() * max) + 1;
const getRandomOperator = () => (Math.floor(Math.random() * 2) === 0);
const getGCD = (a, b) => (!b ? a : getGCD(b, a % b));
const sumDigit = (number) => {
  const n = String(number).length;
  if (n !== 1) {
    return Number(String(number)[0]) + Number(sumDigit(String(number).substring(1), n - 1));
  } return number;
};

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
export { getRandomNumber, getRandomOperator, getGCD };
export { balance };
