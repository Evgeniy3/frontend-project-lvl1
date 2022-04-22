import games from '../index.js';
import getRandom from '../utils.js';

export const gameDescription = 'What is the result of the expression?';

const operators = '+*-';

const result = (num1, num2, operator) => {
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
  const num1 = getRandom(0, 50);

  const num2 = getRandom(0, 50);

  const operator = operators[getRandom(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;

  const answer = String(result(num1, num2, operator));

  return [answer, question];
};

export function brainCalc() {
  games(generateQuestionAnswer, gameDescription);
}
