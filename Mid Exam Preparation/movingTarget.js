function movingTarget(inputArray) {

    targets = inputArray.shift().split(" ").map(Number);

    let index = 0;
    let command = inputArray[index];
    index++;

    while (command !== "End") {

        let splitedCommand = command.split(" ");
        let action = splitedCommand[0];
        let inIndex = Number(splitedCommand[1]);
        let power = Number(splitedCommand[2]);

        switch (action) {
            case "Shoot":
                if (targets[inIndex]) {
                    targets[inIndex] = targets[inIndex] - power;
                }
                if (targets[inIndex] <= 0) {
                    targets.splice(inIndex, 1)
                }
                break;
            case "Add":
                if (targets[inIndex]) {
                    targets.splice(inIndex, 0, power)
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case "Strike":
                if (targets[inIndex - power] && targets[inIndex + power]) {
                    targets.splice(inIndex - power, power * 2 + 1);
                } else {
                    console.log("Strike missed!");
                }

        }
        command = inputArray[index];
        index++;
    }
    console.log(targets.join("|"));
    
}
movingTarget([
    "52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"
])

movingTarget([
    "1 2 3 4 5",
    "Strike 0 1",
    "End"
])

