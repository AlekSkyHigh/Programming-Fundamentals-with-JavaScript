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
