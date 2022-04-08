import readlineSync from 'readline-sync';

export function user () {
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + userName + '!');
}



