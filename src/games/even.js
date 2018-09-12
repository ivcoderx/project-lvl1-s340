import readlineSync from 'readline-sync';

export default () => {
  const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  console.log('Welcome to Brain Games! \n Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const validate = (number, question) => {
    if ((number % 2 === 0 && question === 'yes') || (number % 2 !== 0 && question === 'no')) {
      console.log('Correct!');
    } if (number % 2 === 0 && question !== 'yes') {
      console.log(`'${question}' is wrong answer ;(. Correct answer was 'yes'.`);
      return false;
    } if (number % 2 !== 0 && question !== 'no') {
      console.log(`'${question}' is wrong answer ;(. Correct answer was 'no'.`);
      return false;
    }
    return true;
  };
  let i = 1;
  for (; i <= 3; i += 1) {
    const number = getRandomInRange(1, 100);
    console.log(`'Question:' ${number}`);
    const question = readlineSync.question('Your answer: ');
    if (!validate(number, question)) { break; }
  }
  if (i < 3) {
    console.log(`Let's try again, ${userName}!`);
  } else console.log(`Congratulations, ${userName}!`);
};
