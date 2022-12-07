// You will be given an array of strings.
// The first element will be a string containing wagons (numbers). Each number inside the string represents the number of passengers that are currently in a wagon. 
// The second element in the array will be the max capacity of each wagon (single number).
// The rest of the elements will be commands in the following format:
// •	Add {passengers} – add a wagon to the end with the given number of passengers.
// •	{passengers} - find an existing wagon to fit all the passengers (starting from the first wagon)
// At the end, print the final state of the train (all the wagons separated by a space).

function train(arr) {

    let train = arr.shift().split(' ').map(Number);
    let maxWagonCapacity = Number(arr.shift());
    let arrayLength = arr.length;

    for (let i = 0; i < arrayLength; i++) {

        let currentCommand = arr[i].split(' ');

        if (currentCommand[0] === "Add") {
            
            let newWagonPassengers = Number(currentCommand[1]);
            train.push(newWagonPassengers);

        } else {

            for (let j = 0; j < train.length; j++) {

                let toLoad = Number(currentCommand[0]);

                if ((train[j] + toLoad) <= maxWagonCapacity) {

                    train[j] += toLoad;
                    break;
                }
            }
        }
    }

    console.log(train.join(' '));

}
train(['32 54 21 12 4 0 23',
    '75',       // max capacity
    'Add 10',   // add a wagon to the end with a given number passengers
    'Add 0',    // add a wagon to the end with a given number passengers
    '30',       // passengers
    '10',
    '75'])

train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'])
