const getRandomNumber = max => Math.floor(Math.random() * max) + 1;
const getRandomOperator = () => (Math.floor(Math.random() * 2) === 0);
const getGCD = (a, b) => (!b ? a : getGCD(b, a % b));

export { getRandomNumber, getRandomOperator, getGCD };
