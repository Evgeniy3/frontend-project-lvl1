import { games } from '../../src/index.js';

export const gameDescription = "Answer 'yes' if the number is even, otherwise answer 'no'.";

export function generateQuestionAnswer() {
  const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const question = getRandomInteger(0, 50);

  const answer = (question % 2 === 0) ? 'yes' : 'no';

  return [answer, question];
}

export function brainEven() {
  games(generateQuestionAnswer, gameDescription);
}
