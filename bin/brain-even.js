#!/usr/bin/env node

import readlineSync from 'readline-sync';

function generateQuestionAnswer() {
  const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const question = getRandomInteger(0, 50);

  const answer = (question % 2 === 0) ? 'yes' : 'no';

  return [answer, question];
}

function runEven() {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);

  console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

  const attemptsCount = 3;

  for (let i = 0; i < attemptsCount; i += 1) {
    const [correctAnswer, question] = generateQuestionAnswer();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

      console.log(`Let's try again, ${userName}!`);

      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}

runEven();
