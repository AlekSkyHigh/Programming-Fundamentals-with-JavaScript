// Write a program that finds a place for the tourist on a lift. 
// Every wagon should have a maximum of 4 people on it. If a wagon is full, you should direct the people to the next one with space available.
// Input
// •	On the first line, you will receive how many people are waiting to get on the lift
// •	On the second line, you will receive the current state of the lift separated by a single space: " ".
// Output
// When there is no more available space left on the lift, or there are no more people in the queue, you should print on the console the final state of the lift's wagons separated by " " and one of the following messages:
// •	If there are no more people and the lift have empty spots, you should print:
// "The lift has empty spots!
// {wagons separated by ' '}"
// •	If there are still people in the queue and no more available space, you should print:
// "There isn't enough space! {people} people in a queue!
// {wagons separated by ' '}"
// •	If the lift is full and there are no more people in the queue, you should print only the wagons separated by " "

function theLift(inputArray) {

    let currentStateOfLift = inputArray.pop().split(' ').map(Number);
    let peopleWaiting = inputArray.map(Number);
    let maxWagonCapacity = 4;

    for (let i = 0; i < currentStateOfLift.length; i++) {

        let currentWagon = Number(currentStateOfLift[i]);

        while (currentWagon < maxWagonCapacity) {

            if (peopleWaiting > 0) {
                peopleWaiting -= 1;
                currentWagon++;
            } else {
                currentStateOfLift.splice(i, 1, currentWagon);
                console.log(`The lift has empty spots!`);
                console.log(currentStateOfLift.join(" "));
                return;
            }

        }

        currentStateOfLift.splice(i, 1, currentWagon);
    }

    if (peopleWaiting <= 0) {
        console.log(currentStateOfLift.join(" "));
        return;
    } else {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        console.log(currentStateOfLift.join(" "));
        return;
    }

}
theLift([
    "15",
    "0 0 0 0 0"
])

// theLift([
//     "20",
//     "0 2 0"
// ])
