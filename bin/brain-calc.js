#!/usr/bin/env node

import readlineSync from 'readline-sync';

function generateQuestionAnswer() {
  const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const question = getRandomInteger(0, 50);

  const operator = ['+', '-', '*'];

  const randomOperator = Math.floor(Math.random() * operator.length);

  const answer = `${question} ${operator[randomOperator]} ${question}`;

  return [answer, question, operator[randomOperator]];
}
