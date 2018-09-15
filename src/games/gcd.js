import { welcome, questions } from './units/dialog';

export default () => {
  welcome('Find the greatest common divisor of given numbers.');
  questions('gcd');
};
