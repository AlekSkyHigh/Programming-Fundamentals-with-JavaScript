function shootForTheWin(inputArray) {

    let targets = inputArray.shift().split(" ").map(Number);
    let targetShot = 0;
    let index = 0;
    let command = inputArray[index];
    index++;

    while (command !== "End") {

        let targetIndex = Number(command);

        if (targetIndex >= targets.length || targetIndex < 0) {
            command = inputArray[index];
            index++
            continue;
        }

        let targetNumber = Number(targets[targetIndex]);
        targets.splice(targetIndex, 1, -1);
        targetShot++;

        for (let i = 0; i < targets.length; i++) {

            let currentCheck = Number(targets[i]);

            if (currentCheck > targetNumber) {
                let inIndex = targets.indexOf(currentCheck);
                targets.splice(inIndex, 1, (currentCheck - targetNumber));

            } else if (currentCheck <= targetNumber && currentCheck !== -1) {
                let inIndex = targets.indexOf(currentCheck);
                targets.splice(inIndex, 1, (currentCheck + targetNumber));
            }

        }
        command = inputArray[index];
        index++
    }
    console.log(`Shot targets: ${targetShot} -> ${targets.join(" ")}`);

}
shootForTheWin([
    "24 50 36 70",
    
])

shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])

