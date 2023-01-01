// Write a program that keeps track of every won battle against an enemy. You will receive initial energy. Afterward, you will start receiving the distance you need to reach an enemy until the "End of battle" command is given, or you run out of energy.
// The energy you need for reaching an enemy is equal to the distance you receive. Each time you reach an enemy, you win a battle, and your energy is reduced. Otherwise, if you don't have enough energy to reach an enemy, end the program and print: "Not enough energy! Game ends with {count} won battles and {energy} energy".
// Every third won battle increases your energy with the value of your current count of won battles.
// Upon receiving the "End of battle" command, print the count of won battles in the following format:
// "Won battles: {count}. Energy left: {energy}" 

function counterStrike(inputArray) {

    let energy = Number(inputArray.shift());
    let fragCounter = 0;

    let index = 0;
    let command = inputArray[index];
    index++;

    while (command !== "End of battle") {

        let currentEnemy = Number(command);

        if (energy >= currentEnemy) {
            energy -= currentEnemy;
            fragCounter++;
        } else {
            console.log(`Not enough energy! Game ends with ${fragCounter} won battles and ${energy} energy`);
            return;
        }

        if (fragCounter % 3 === 0) {
            energy += fragCounter;
        }

        command = inputArray[index];
        index++;
    }

    console.log(`Won battles: ${fragCounter}. Energy left: ${energy}`);
}
counterStrike([
    "100",  //initial energy
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"
])

counterStrike([
    "200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"
])

