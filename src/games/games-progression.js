import games from '../index.js';
import getRandom from '../utils.js';

export const gameDescription = 'What number is missing in the progression?';

const progressionLength = 10;

const maxHiddenNumberIndex = progressionLength - 1;

const generateProgression = (firstProgressionElement, progresStep, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(firstProgressionElement + progresStep * i);
  }

  return progression;
};

export const generateQuestionAnswer = () => {
  const hiddenNumberPosition = getRandom(0, maxHiddenNumberIndex);

  const progresStep = getRandom(0, 10);

  const firstProgressionElement = getRandom(0, 100);

  const progression = generateProgression(firstProgressionElement, progresStep, progressionLength);

  progression[hiddenNumberPosition] = '..';

  const question = progression.join(' ');

  const answer = String(firstProgressionElement + progresStep * (hiddenNumberPosition));

  return [answer, question];
};

export function brainProg() {
  games(generateQuestionAnswer, gameDescription);
}
