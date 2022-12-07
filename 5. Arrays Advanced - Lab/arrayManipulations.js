// Write a function that manipulates an array of numbers. 
// •	Add {number}: add a number to the end of the array
// •	Remove {number}: remove all occurrences of a particular number from the array
// •	RemoveAt {index}: removes number at a given index
// •	Insert {number} {index}: inserts a number at a given index
// Note: All the indices will be valid!
// The input comes as an array of strings. The first element will be a string containing the array to manipulate. Every other command you receive will also be a string.
// The output is the manipulated array printed on the console on a single line, separated by space.

// First Solving: 
function arrayManipulations(commands) {

    let resultArr = commands.shift().split(' ').map(Number);

    for (let i = 0; i < commands.length; i++) {

        let currentCommand = commands[i];
        let words = currentCommand.split(' ');

        let command = words[0];
        let firstNum = Number(words[1]);
        let secondNum = Number(words[2]);

        switch (command) {
            case "Add": resultArr.push(firstNum); break;
            case "Remove": resultArr = resultArr.filter(el => el !== firstNum); break;
            case "RemoveAt": resultArr.splice(firstNum, 1); break;
            case "Insert": resultArr.splice(secondNum, 0, firstNum); break;
        }

    }
    console.log(resultArr.join(' '));

}
arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2'])

// Second Solving:
function arrayManipulations(commands) {

    let arr = commands.shift().split(' ').map(Number);

    for (let i = 0; i < commands.length; i++) {

        let [command, firstNum, secondNum] = commands[i].split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case "Add":
                add(firstNum);
                break;
            case "Remove":
                remove(firstNum);
                break;
            case "RemoveAt":
                removeAt(firstNum);
                break;
            case "Insert":
                insert(firstNum, secondNum);
                break;

        }
    }
    function add(el) {
        arr.push(el);
    }
    function remove(num) {
        arr = arr.filter(el => el !== num);
    }
    function removeAt(index) {
        arr.splice(index, 1);
    }
    function insert(num, index) {
        arr.splice(index, 0, num);
    }
    console.log(arr.join(' '));
}
arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2'])

