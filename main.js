function getComputerChoice () {
    let comChoice = Math.random();
    if (comChoice < 0.34) {
        return 'rock';
    } else if (comChoice <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getUserChoice () {
    let userChoice = prompt('Do you choose rock, paper or scissors?');
    return userChoice.toLowerCase()
}

let computerScore = 0;
let userScore = 0;

function playRound (userChoice, comChoice) {
    if (userChoice === comChoice) {
        return alert('It\'s a tie!');
    } else if (userChoice === 'rock') {
        if (comChoice === 'scissors') {
            userScore++;
            return alert('You win! Rock beats scissors.');
        } else {
            computerScore++;
            return alert('You lose! Paper beats rock.');
        }
    } else if (userChoice === 'paper') {
        if (comChoice === 'rock') {
            userScore++;
            return alert('You win! Paper beats rock.');
        } else {
            computerScore++;
            return alert('You lose! Scissors beats paper.');
        }
    } else if (userChoice === 'scissors') {
        if (comChoice === 'paper') {
            userScore++;
            return alert('You win! Scissors beats paper.');
        } else {
            computerScore++;
            return alert('You lose! Rock beats scissors.');
        }
    }
}

console.log('Welcome to Rock, Paper, Scissors!');