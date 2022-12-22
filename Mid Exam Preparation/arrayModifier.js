//  Solve 1 of 3:
function arrayModifier(array) {

    let resultArray = array.shift().split(" ").map(Number);

    let index = 0;
    let command = array[index].split(" ");
    index++;

    let action = command[0];
    let indexOne = Number(command[1]);
    let indexTwo = Number(command[2]);

    while (action !== "end") {

        switch (action) {
            case "swap":
                let temp = resultArray[indexOne];
                resultArray[indexOne] = resultArray[indexTwo];
                resultArray[indexTwo] = temp;
                break;
            case "multiply":
                let multiply = Number(resultArray[indexOne] * resultArray[indexTwo]);
                resultArray.splice(indexOne, 1, multiply);
                break;
            case "decrease":
                resultArray = resultArray.map((num) => num - 1);
                break;
        }

        command = array[index].split(" ");
        action = command[0]
        indexOne = Number(command[1]);
        indexTwo = Number(command[2]);
        index++;

    }
    console.log(resultArray.join(", "));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
])


// Solve 2 of 3:
function arrayModifier(array) {

    let resultArray = array.shift().split(" ").map(Number);

    let index = 0;
    let command = array[index].split(" ");
    index++;

    let action = command[0];
    let indexOne = Number(command[1]);
    let indexTwo = Number(command[2]);

    while (action !== "end") {

        if (action === "swap") {

            let temp = resultArray[indexOne];
            resultArray[indexOne] = resultArray[indexTwo];
            resultArray[indexTwo] = temp;

        } else if (action === "multiply") {

            let multiply = Number(resultArray[indexOne] * resultArray[indexTwo]);
            resultArray.splice(indexOne, 1, multiply);

        } else if (action === "decrease") {

            resultArray = resultArray.map((num) => num - 1);
        }

        command = array[index].split(" ");
        action = command[0]
        indexOne = Number(command[1]);
        indexTwo = Number(command[2]);
        index++;

    }
    console.log(resultArray.join(", "));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
])

// Solve 3 of 3:
function arrayModifier(array) {

    let resultArray = array.shift().split(' ').map(Number);

    for (let command of array) {
        let [action, indexOne, indexTwo] = command.split(' ');

        if (action === 'swap') {
            swap(resultArray, indexOne, indexTwo);
        } else if (action === 'multiply') {
            multiply(resultArray, indexOne, indexTwo);
        } else if (action === 'decrease') {
            decrease(resultArray);
        }
    }

    function swap(resultArray, indexOne, indexTwo) {
        [resultArray[indexOne], resultArray[indexTwo]] = [resultArray[indexTwo], resultArray[indexOne]];
    }

    function multiply(resultArray, indexOne, indexTwo) {
        let multiply = Number(resultArray[indexOne] * resultArray[indexTwo]);
        resultArray.splice(indexOne, 1, multiply);
    }

    function decrease(arrayInput) {
        resultArray = arrayInput.map((num) => num - 1);
    }

    console.log(resultArray.join(", "));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
])
