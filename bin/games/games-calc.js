import { games } from '../../src/index.js';

export const gameDescription = 'What is the result of the expression?';

const operators = '+*-';

const getAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      break;
  }
  return false;
};

export const generateQuestionAnswer = () => {
  const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const num1 = getRandomInteger(0, 50);

  const num2 = getRandomInteger(0, 50);

  const operator = operators[getRandomInteger(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;

  const answer = String(getAnswer(num1, num2, operator));

  return [answer, question];
};

export function brainCalc() {
  games(generateQuestionAnswer, gameDescription);
}
