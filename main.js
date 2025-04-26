function getComputerChoice(){
    let x = Math.floor(Math.random() * 3) + 1;
    if (x === 1) {
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

let humanScore;
let computerScore;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("tie");
        return;
    }

    const winConditions = {
        rock:       "scissors",
        paper:      "rock",
        scissors:   "paper"
    }

    if (winConditions[humanChoice] === computerChoice){
        humanScore++;
        console.log(`you win, you had ${humanChoice}, computer had ${computerChoice}.`);
        
    } else {
        computerScore++;
        console.log(`you lost, you had ${humanChoice}, computer had ${computerChoice}.`);
        
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`-------ROUND: ${round} --------`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`SCORE:----YOU:${humanScore}----COMPUTER:${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log(`you win congrats, you had ${humanScore}, com had ${computerScore}`);
    }
    else if (computerScore > humanScore) {
        console.log(`you faken lost mate, you had ${humanScore}, com had ${computerScore}`);
    }
    else {
        console.log("tie");
    }

}

playGame();