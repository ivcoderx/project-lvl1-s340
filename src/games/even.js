import readlineSync from 'readline-sync';

export default () => {
  const getRandomInRange = max => Math.floor(Math.random() * max) + 1;
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
  let result = 0;
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomInRange(100);
    console.log(`'Question:' ${number}`);
    const question = readlineSync.question('Your answer: ');
    if (!validate(number, question)) {
      break;
    } else result += 1;
  }
  if (result < 3) {
    console.log(`Let's try again, ${userName}!`);
  } else console.log(`Congratulations, ${userName}!`);
};
