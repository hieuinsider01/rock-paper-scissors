// Main rock-paper-scissors function
function playGame() {
    let userScore = 0;
    let computerScore = 0;
// Function declare to get computer's choice
    function getComputerChoice() {
        const rand = Math.random();
        if (rand < 1 / 3) return "rock";
        else if (rand < 2 / 3) return "paper";
        else return "scissors";
    }
// Function to play a single round
    function playRound(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            alert("It's a tie! Both chose " + userChoice);
            return 0;
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            alert("You win this round! Computer chose " + computerChoice + ". " + userChoice + " beats " + computerChoice);
            return 1;
        } else {
            alert("Computer wins this round! Computer chose " + computerChoice + ". " + computerChoice + " beats " + userChoice);
            return -1;
        }
    }
// Loop to play 5 rounds
    for (let round = 1; round <= 5; round++) {
        let userChoice = prompt("Round " + round + ": Choose rock, paper, or scissors:").toLowerCase();
        let computerChoice = getComputerChoice();
        let result = playRound(userChoice, computerChoice);
        if (result === 1) userScore++;
        else if (result === -1) computerScore++;
    }
// Determine and announce the overall winner
    if (userScore > computerScore) {
        alert("You win the game! Final score: you got " + userScore + " points, computer got " + computerScore + " points.");
    } else if (computerScore > userScore) {
        alert("Computer wins the game! Final score: you got " + userScore + " points, computer got " + computerScore + " points.");
    } else {
        alert("It's a tie! Final score: you got " + userScore + " points, computer got " + computerScore + " points.");
    }
}
// Start the game
playGame();