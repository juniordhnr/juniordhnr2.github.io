// Generate random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to check user's guess
function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);
  const message = document.getElementById('message');

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }

  if (guess === randomNumber) {
    message.textContent = '我现在是你的厕奴啦 心悦!';
  } else if (guess < randomNumber) {
    message.textContent = 'Too low! Try a higher number.';
  } else {
    message.textContent = 'Too high! Try a lower number.';
  }
}
