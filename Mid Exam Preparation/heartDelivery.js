function heartDelivery(inputArray) {

    let neighborhood = inputArray.shift().split("@").map(Number); // 10, 10, 10, 2 
    let currentLine = inputArray.shift();
    let currentIndex = 0;

    while (currentLine !== "Love!") {

        let splitedLine = currentLine.split(" ");
        let command = splitedLine[0];
        let stepSize = Number(splitedLine[1]);

        currentIndex += stepSize;

        if (currentIndex >= neighborhood.length) {
            currentIndex = 0;
        }

        if (neighborhood[currentIndex] === 0) {
            console.log(`Place ${currentIndex} already had Valentine's day.`);
        } else {
            neighborhood[currentIndex] -= 2;
            if (neighborhood[currentIndex] === 0) {
                console.log(`Place ${currentIndex} has Valentine's day.`);
            }
        }

        currentLine = inputArray.shift()
    }
    console.log(`Cupid's last position was ${currentIndex}.`);

    let isSuccsess = true;
    let failedCounter = 0;

    for (house of neighborhood) {
        if (house !== 0) {
            isSuccsess = false;
            failedCounter++;
        }
    }

    if (isSuccsess) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${failedCounter} places.`);
    }
}
heartDelivery([
    "10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"
])

// heartDelivery([
//     "2@4@2",
//     "Jump 2",
//     "Jump 2",
//     "Jump 8",
//     "Jump 3",
//     "Jump 1",
//     "Love!"
// ])

