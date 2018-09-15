import { welcome, questions } from './units/dialog';

export default () => {
  welcome('What is the result of the expression?');
  questions('calc');
};
