import readlineSync from 'readline-sync';

export default function games(generateQuestionAnswer, gameDescription) {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameDescription);

  const count = 3;

  for (let i = 0; i < count; i += 1) {
    const [correctAnswer, question] = generateQuestionAnswer();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

      console.log(`Let's try again, ${userName}!`);

      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
