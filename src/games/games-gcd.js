import games from '../index.js';
import getRandom from '../utils.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

const getAnswer = (num1, num2) => {
  let i = num1;
  while (num1 % i !== 0 || num2 % i !== 0) {
    i -= 1;
  }
  return i;
};

export const generateQuestionAnswer = () => {
  const num1 = getRandom(0, 50);

  const num2 = getRandom(0, 50);

  const question = `${num1} ${num2}`;

  const answer = String(getAnswer(num1, num2));

  return [answer, question];
};

export function brainGcd() {
  games(generateQuestionAnswer, gameDescription);
}
