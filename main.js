// Main rock-paper-scissors function
let userScore = 0;
let computerScore = 0;
const WINNING_SCORE = 5; //Declare winning conditional
let isGameOver = false; // Flag to check if the game has ended
//Create a div to show result
const results = document.querySelector(".results")
const btn = document.querySelectorAll(".choice-btn");
const roundMessageDiv = document.querySelector(".round-message"); // Get the new div for round messages
const finalMessageDiv = document.querySelector(".final-message"); // Get the new div for the final message
// Function to play the game
function playGame() {

// Function declare to get computer's choice
    function getComputerChoice() {
        const rand = Math.random();
        if (rand < 1 / 3) return "rock";
        else if (rand < 2 / 3) return "paper";
        else return "scissors";
    }
   
    // Click a choice button
    btn.forEach(button => {
        button.addEventListener("click", () => {
            // If game is over, do nothing
            if (isGameOver) return;

            // Function to play a single round
            function playRound(userChoice, computerChoice) {
                if (userChoice === computerChoice) {
                    return { result: 0, message: `It's a tie! Both chose ${userChoice}.` };
                } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            return { result: 1, message: `You win this round! ${userChoice} beats ${computerChoice}.` };
        } else {
            return { result: -1, message: `Computer wins this round! ${computerChoice} beats ${userChoice}.` };
        }
    }
            let userChoice = button.dataset.choice;
            let computerChoice = getComputerChoice();
            let result = playRound(userChoice, computerChoice);
            
            if (result.result === 1) userScore++;
            else if (result.result  === -1) computerScore++;

            // Display the round message
            roundMessageDiv.textContent = result.message;
            //Update score each round
            results.textContent = `Your score: ${userScore} | Computer score: ${computerScore}`

            //Check the winning condition each round (MOVED HERE)
            if (userScore >= WINNING_SCORE || computerScore >= WINNING_SCORE) {
                isGameOver = true; // Set game to over
                let finalMessage = ""
                if (userScore > computerScore) {
                    finalMessage = "YAY! You are final champion"
                } else {
                    finalMessage = "So sorry bro, computer beat you. Try again later."
                }
                finalMessageDiv.textContent = finalMessage; // Display final message in its own div
            }
        });
    });

}
// Determine and announce the overall winner
//     if (userScore > computerScore) {
//         console.log("You win the game! Final score: you got " + userScore + " points, computer got " + computerScore + " points.");
//     } else if (computerScore > userScore) {
//         console.log("Computer wins the game! Final score: you got " + userScore + " points, computer got " + computerScore + " points.");
//     } else {
//         console.log("It's a tie! Final score: you got " + userScore + " points, computer got " + computerScore + " points.");
//     }
// }

// Start the game
playGame();