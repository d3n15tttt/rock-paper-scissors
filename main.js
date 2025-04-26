

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x === 1){
        return "rock";
    }
    else if (x === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


function getHumanChoice() {
    return prompt("ROCK, PAPER, SCISSORS").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
        return;
    }

    const winConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    }

    if (winConditions[humanChoice] === computerChoice) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)

    } else {
        computerScore++;
        console.log(`You loser! ${computerChoice} beats ${humanChoice}`)
    }

}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let round = 1; round <= 5; round++){
        console.log(`-----ROUND ${round}------`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}\n`);
    }
    ////

    if (humanScore > computerScore) {
        console.log(`You won the game. Final score: ${humanScore} to ${computerScore}.`);
    } else if (computerScore > humanScore) {
        console.log(`You lost the game. Final score: ${computerScore} to ${humanScore}.`);
    } else {
        console.log(`It's a draw! Final score: ${computerScore} to ${humanScore}.`);
    }
}


playGame();