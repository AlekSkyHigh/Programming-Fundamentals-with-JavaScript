// "Guess A Number" is a game in which your opponent, "the computer" chooses a random number between "1 and 100" and your task is to guess this number. 
// After each number you enter, the computer will give you a hint of whether the number is greater or less than the number you selected until you guess the correct number:

function theNumberGuessGame() {

    const readline = require(`readline`).createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let computerGuess = Math.floor(Math.random() * 100);
    let guess;

    let recrusiveAsyncReadLine = function () {
        readline.question('Guess the number (0-100): ', number => {
            guess = Number(number);

            if (guess <= 100 && guess >= 0) {

                if (guess == computerGuess) {
                    console.log(`You guess it!`);
                    return readline.close();

                } else if (guess < computerGuess) {
                    console.log(`Too Low!`);
                    recrusiveAsyncReadLine()

                } else if (guess > computerGuess) {
                    console.log(`Too High!`);
                    recrusiveAsyncReadLine()
                }

            } else {
                console.log(`Invalid input! Try again...`);
                recrusiveAsyncReadLine();
            }

        });

    }
    recrusiveAsyncReadLine();
}
theNumberGuessGame()
