'use strict';
//Generating Random number between 1-20 by using Math object and it's methods
let secretNumber = Math.trunc(Math.random() * 20 + 1);

//Settiing up the highscore
let highscore = 0;

//Initially score is set to 20
let score = 20;
//Assigning the initial value of score to Html tag
document.querySelector('.number').value = secretNumber;

//Again button will reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.highscore').textContent;
});

//Adding onClick EVENT when player hits the Check button
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When playes has not input anything
  if (!guess) {
    document.querySelector('.message').textContent =
      "⛔️ You haven't entered anything!";
  }

  //If users enters the value which is not in the given range (1-20)
  else if (guess > 20 || guess < 0) {
    document.querySelector('.message').textContent =
      'Your value is not in the given range!';
  }

  //When player has input the correct/same number as secret number
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🏆 You have won the game';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '60rem';
    document.querySelector('.number').textContent = secretNumber;

    //If the score is greater than current value of highscore than it will assign the current value of score to highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } else {
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //When player has input very high number than secret number
  else if (guess > secretNumber) {
    //When score is 1 and you can only have one guess left
    if (score > 1) {
      document.querySelector('.message').textContent =
        '📈 Your guess is too high';
      score--;
      document.querySelector('.score').textContent = score;
    }

    //When score is 0 and you have lost the game
    else {
      document.querySelector('.message').textContent = '🏴‍☠️ You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }

  //When player has input very low number than secret number
  else if (guess < secretNumber) {
    //When score is 1 and you can only have one guess left
    if (score > 1) {
      document.querySelector('.message').textContent =
        '📉 Your guess is too low';
      score--;
      document.querySelector('.score').textContent = score;
    }

    //When score is 0 and you have lost the game
    else {
      document.querySelector('.message').textContent = '🏴‍☠️ You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
