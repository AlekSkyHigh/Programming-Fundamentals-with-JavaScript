// Write a function that processes information about a race. On the first line, you will be given a list of participants separated by ", ". On the next few lines until you receive a line "end of race" you will be given some info which will be some alphanumeric characters. In between them, you could have some extra characters which you should ignore. For example: "G!32e%o7r#32g$235@!2e". The letters are the name of the person and the sum of the digits is the distance he ran. So here we have George who ran 29 km. Store the information about the person only if the list of racers contains the name of the person. If you receive the same person more than once just add the distance to his old distance. At the end print the top 3 racers ordered by distance in descending in the format:
// "1st place: {first racer}
// 2nd place: {second racer}
// 3rd place: {third racer}"

function race(inputArrayStrings) {

    let racers = inputArrayStrings.shift().split(", ");
    let resultsObject = {};
    let racerNamePattern = /[A-Za-z]+/gm;
    let racerDistancePattern = /[0-9]+/gm;
    let line = inputArrayStrings.shift();

    while (line !== 'end of race') {

        let currentName = line.match(racerNamePattern).join('');
        let currentDistance = line.match(racerDistancePattern).join('');

        if (racers.includes(currentName)) {
            let sumDistance = 0;

            for (let digit of currentDistance) {
                sumDistance += Number(digit);
            }

            if (!resultsObject.hasOwnProperty(currentName)) {
                resultsObject[currentName] = sumDistance;
            } else {
                resultsObject[currentName] += sumDistance;
            }
        }

        line = inputArrayStrings.shift();
    }

    let sortedResult = Object.entries(resultsObject).sort((a, b) => b[1] - a[1]);

    let firstPlace = sortedResult[0][0];
    let secondPlace = sortedResult[1][0];
    let thirdPlace = sortedResult[2][0];
    console.log(`1st place: ${firstPlace}`);
    console.log(`2nd place: ${secondPlace}`);
    console.log(`3rd place: ${thirdPlace}`);

}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])

race([
    'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'
])
