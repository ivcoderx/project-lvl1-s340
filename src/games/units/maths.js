const getRandomNumber = max => Math.floor(Math.random() * max) + 1;
const getRandomOperator = () => (Math.floor(Math.random() * 2) === 0);
const getGCD = (a, b) => (!b ? a : getGCD(b, a % b));
export const sumDigit = (number) => {
  const n = String(number).length;
  if (n !== 1) {
    return Number(String(number)[0]) + Number(sumDigit(String(number).substring(1), n - 1));
  } return number;
};


export { getRandomNumber, getRandomOperator, getGCD };
