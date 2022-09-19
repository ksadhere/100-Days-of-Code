/* eslint-disable no-plusplus */
/* eslint-disable strict */

'use strict';

/* Changing the text content of the message, number, score, and guess. */
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 20;

/* Creating a random number between 1 and 20. */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

/* This is an event listener that is listening for a click event. When the click event is
triggered, it will run the code inside the function. */
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  /* This is a conditional statement that is checking if the guess is equal to the secret number. If it
  is, it will display a message saying "Correct guess". If it is not, it will check if the guess is
  greater than the secret number. If it is, it will display a message saying "Too high". If it is
  not, it will check if the guess is less than the secret number. If it is, it will display a
  message saying "Too low". */

  if (!guess) {
    displayMessage('No number');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'To high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
