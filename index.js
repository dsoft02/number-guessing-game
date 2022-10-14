const prompt = require('prompt-sync')({sigint: true});
//variable to store the stage range
var range = 2;
var point = 0;
var stage = 1;

//request for player username
console.log("WELCOME TO GUESS MY NUMBER GAME\n=================================\n");
let username = prompt(`What is your username: `);
console.log(`Hello ${username}\n`);

// This variable is used to determine if the app should continue prompting the user for input
let gameOver = false;

while (!gameOver) {
  // Random number from 1 - range
  let numberToGuess = Math.round(Math.random() * range);
  console.log(`STAGE: ${stage}\t Total Points: ${point}`);
  console.log(numberToGuess);
  // Get user input
  let guess = prompt(`Please Guess a number from 1 to ${range}: `);
  // Convert the string input to a number
  guess = Number(guess);
  // Compare the guess to the secret answer and let the user know.
  if (guess === numberToGuess) {
    stage++;
    point++;
    range++;
    console.log('Congrats, you got it!\n');
  } else {
    gameOver = true;
  }
}
if (gameOver)
{
  //GAME OVER
  console.log('G A M E  O V E R ! ! !');
  console.log(`Your Total Point is: ${point}\n`);
  process.exit(0);
}


