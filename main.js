const minNumber = 33;
const maxNumber = 77;
const answer = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minNumber} and ${maxNumber}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert(`Please enter a valid number.`);
  } else if (guess < minNumber || guess > maxNumber) {
    alert(`Please enter a valid number.`);
  } else {
    attempts++;
    if (guess < answer) {
      alert(`Too low. TRY AGAIN!`);
    } else if (guess > answer) {
      alert(`Too high. TRY AGAIN!`);
    } else {
      alert(`Congradulations!! You guessed the correct answer ${answer}. It took you ${attempts} attempts to guess correctly.`);
      running = false;
    }
  }
}