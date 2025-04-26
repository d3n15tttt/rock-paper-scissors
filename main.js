// get computer choice
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1; // randomize a number from 1 to 3 (1 = rock, 2 = paper, 3 or everything else = scissors)
    if (x === 1) { // 1 = rock
        return "rock";
    } else if (x === 2) { // 2 = paper
        return "paper";
    } else {            // everything else = scissors
        return "scissors"; 
    }
}

function getHumanChoice() {
    return prompt(`ROCK, PAPER OR SCISSORS?`);
}

let humanScore;
let computerScore;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`it's a tie, you both picked ${humanChoice}`);
        return;
    }

    let winConditions = {
        rock:       "scissors",
        paper:      "rock",
        scissors:   "paper"
    }

    if (winConditions[humanChoice] === computerChoice) {
        humanScore++;
        console.log(`You won, you picked ${humanChoice}, while COM picked ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`You faken lost mate, you had ${humanChoice}, while the COM had ${computerChoice}.`);
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`-----ROUND:${round}-----`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`SCORE: YOU - ${humanScore} -- COM - ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log(`you won the whole game congrats, final score: you-${humanScore} com-${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`you lost the whole game wcyd, final score: you-${humanScore} com-${computerScore}`);
    } else {
        console.log(`it's a draw bruh, final score: you-${humanScore} com-${computerScore}`);
    }
}

playGame();