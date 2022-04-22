import games from '../index.js';
import getRandom from '../utils.js';

export const gameDescription = "'yes' if given number is prime. Otherwise answer 'no'.";

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export function generateQuestionAnswer() {
  const question = getRandom(0, 20);

  const answer = isPrime(question) ? 'yes' : 'no';

  return [answer, question];
}

export function brainPrime() {
  games(generateQuestionAnswer, gameDescription);
}
