const getRandomNumber = max => Math.floor(Math.random() * max) + 1;
const getRandomOperator = () => (Math.floor(Math.random() * 2) === 0);

export { getRandomNumber, getRandomOperator };
