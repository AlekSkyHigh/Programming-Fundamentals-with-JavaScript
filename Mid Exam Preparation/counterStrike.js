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

