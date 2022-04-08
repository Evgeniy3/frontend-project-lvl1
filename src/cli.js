import readlineSync from 'readline-sync';

export function user() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
}
