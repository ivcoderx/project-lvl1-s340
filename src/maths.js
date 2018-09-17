const getRandomNumber = max => Math.floor(Math.random() * max) + 1;
const sumDigit = (number) => {
  const n = String(number).length;
  if (n !== 1) {
    return Number(String(number)[0]) + Number(sumDigit(String(number).substring(1), n - 1));
  } return number;
};


export { getRandomNumber, sumDigit };
