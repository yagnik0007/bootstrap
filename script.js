const userGuessInput = document.getElementById('user-guess');
const submitButton = document.getElementById('submit-guess');
const messageElement = document.getElementById('message');
const attemptsElement = document.getElementById('attempts');
const previousGuessesElement = document.getElementById('previous-guesses');
const resetButton = document.getElementById('reset-game');

let randomNumber;
let attempts = 0;
let previousGuesses = [];

function startNewGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;  
  attempts = 0;  
  previousGuesses = [];  
  attemptsElement.textContent = attempts;  
  previousGuessesElement.textContent = ''; 
  messageElement.textContent = 'Start guessing'; 
  userGuessInput.value = ''; 
}

function handleGuess() {
  const userGuess = parseInt(userGuessInput.value);  

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    messageElement.textContent = 'Please enter a valid number between 1 and 100!';  
    return;  
  }

  attempts++;  
  previousGuesses.push(userGuess); 

  attemptsElement.textContent = attempts;
  previousGuessesElement.textContent = previousGuesses.join(', ');

  if (userGuess === randomNumber) {
    messageElement.textContent = `Congratulations! You guessed the number ${randomNumber}!`;  
  } else if (userGuess < randomNumber) {
    messageElement.textContent = 'Too low! Try again.';  
  } else {
    messageElement.textContent = 'Too high! Try again.';  
  }
}

resetButton.addEventListener('click', startNewGame);

submitButton.addEventListener('click', handleGuess);

window.onload = startNewGame;
