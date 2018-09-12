import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to Brain Games! \n Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
