import readlineSync from 'readline-sync';

const welcome = 'Welcome to Brain Games! \n';
const userName = readlineSync.question('May I have your name? ');

export { welcome, userName };
