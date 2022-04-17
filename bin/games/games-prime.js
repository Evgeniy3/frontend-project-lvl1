import { games } from '../../src/index.js';

export const gameDescription = "'yes' if given number is prime. Otherwise answer 'no'.";

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export function generateQuestionAnswer() {
  const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const question = getRandomInteger(0, 50);

  const answer = isPrime(question) ? 'yes' : 'no';

  return [answer, question];
}

export function brainPrime() {
  games(generateQuestionAnswer, gameDescription);
}
