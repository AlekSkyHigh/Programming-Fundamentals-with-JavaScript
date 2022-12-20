// Rock-Paper-Scissors is a simple two-player game where you and your opponent (the computer) simultaneously choose one of the following three options: "rock", "paper" or "scissors". The rules are as follows:
// •	Rock beats scissors (the scissors get broken by the rock)
// •	Scissors beats paper (the paper gets cut by the scissors)
// •	Paper beats rock (the paper covers the rock)
// The winner is the player whose choice beats the choice of his opponent. If both players choose the same option (e.g., "paper"), the game outcome is "draw":

function rockPaperScissorsGame(playerTurn) {

    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    if (playerTurn == "r" || playerTurn == "Rock") {
        playerTurn = rock;
    } else if (playerTurn == "p" || playerTurn == "Paper") {
        playerTurn = paper;
    } else if (playerTurn == "s" || playerTurn == "Scissors") {
        playerTurn = scissors;
    } else {
        console.log("Invalid Input. Try again...");
    }

    let computerRandomeMove = Math.floor(Math.random() * 3) + 1;

    switch (computerRandomeMove) {
        case 1: computerTurn = rock; break;
        case 2: computerTurn = paper; break;
        case 3: computerTurn = scissors; break;
    }

    console.log(`The computer choose ${computerTurn}!`);

    if ((playerTurn === rock && computerTurn === scissors) ||
        (playerTurn === paper && computerTurn === rock) ||
        (playerTurn === scissors && computerTurn === paper)) {
        console.log("You win! Congrats!");
    } else if ((playerTurn === rock && computerTurn === paper) ||
        (playerTurn === paper && computerTurn === scissors) ||
        (playerTurn === scissors && computerTurn === rock)) {
        console.log("You loose! Try again...");
    } else {
        console.log("This game was a draw! Try again...");
    }
}
rockPaperScissorsGame("r")
