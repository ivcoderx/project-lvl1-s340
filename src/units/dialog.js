import readlineSync from 'readline-sync';

let userName = '';
const welcome = (descript) => {
  console.log(`'Welcome to Brain Games! \n' ${descript}`);
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
const isWrong = (question, answer) => console.log(`'${question}' is wrong answer ;(. Correct answer was '${answer}'`);
const isResult = (result) => {
  const goodBye = end => console.log(`${end} ${userName}`);
  if (result < 3) {
    goodBye('Let\'s try again, ');
  } else goodBye('Congratulations, ');
};
export { welcome, isWrong, isResult };
