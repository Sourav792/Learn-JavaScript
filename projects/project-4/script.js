const randomNumber = Math.floor((Math.random() * 100) + 1);
// console.log(randomNumber);
const submit = document.querySelector('#submit');
const userInput = document.querySelector('.guessfield');
const guesslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi') 

let prevGuess = [];
let numGuess = 1;
let playGame = true;


if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
       const guess =  parseInt(userInput.value);
       validateGuess(guess);
    })
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number')
  } else if (guess < 1) {
    alert('please enter a number greater than 1')
  } else if (guess > 100) {
    alert('please enter a number less than 100')
  } else {
    prevGuess.push(guess)
    if (numGuess === 11) {
        displayGuess(guess)
        displayMassage(`game over, random was ${randomNumber}`)
        endGame()
    } else {
        displayGuess(guess)
        checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMassage('you guessed is right')
    endGame()
  } else if (guess < randomNumber) {
    displayMassage('number is less')
  } else if (guess < randomNumber) {
    displayMassage('number is greater')
  } 
}

function displayGuess(guess) {
  userInput.value = '';
  guesslot.innerHTML += `${guess }`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMassage(massage) {
    lowOrHi.innerHTML = `<h2>${massage}</h2>`
}

function endGame() {
    
}

function newGame() {

}