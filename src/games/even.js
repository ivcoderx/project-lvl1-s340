import { welcome, questions } from './units/dialog';

export default () => {
  welcome('Answer "yes" if number even otherwise answer "no".');
  questions('even');
};
