import { games } from './games.js';

export const gameDescription = 'What is the result of the expression?';

const operators = '+*-';

const getAnswer = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      break;
  }
  return false;
};

export const generateQuestionAnswer = () => {
  const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const a = getRandomInteger(0, 50);

  const b = getRandomInteger(0, 50);

  const operator = operators[getRandomInteger(0, operators.length - 1)];

  const question = `${a} ${operator} ${b}`;

  const answer = String(getAnswer(a, b, operator));

  return [answer, question];
};

export function brainCalc() {
  games(generateQuestionAnswer, gameDescription);
}
