import games from '../../src/index.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

const getAnswer = (num1, num2) => {
  let i = num1;
  while (num1 % i !== 0 || num2 % i !== 0) {
    i -= 1;
  }
  return i;
};

export const generateQuestionAnswer = () => {
  const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const num1 = getRandomInteger(0, 50);

  const num2 = getRandomInteger(0, 50);

  const question = `${num1} ${num2}`;

  const answer = String(getAnswer(num1, num2));

  return [answer, question];
};

export function brainGcd() {
  games(generateQuestionAnswer, gameDescription);
}
