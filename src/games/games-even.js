import games from '../index.js';
import getRandom from '../utils.js';

export const gameDescription = "Answer 'yes' if the number is even, otherwise answer 'no'.";

export function generateQuestionAnswer() {
  const question = getRandom(0, 50);

  const answer = (question % 2 === 0) ? 'yes' : 'no';

  return [answer, question];
}

export function brainEven() {
  games(generateQuestionAnswer, gameDescription);
}
