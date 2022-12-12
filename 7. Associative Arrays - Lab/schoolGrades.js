// Write a function that stores students and their grades throughout the year. 
// If a student appears more than once, add the new grades to existing ones. 
// Finally, print the students and their average grades, sorted alphabetically by student name. The input comes as an array of strings.
// Note: The average grades must be fixed to the second decimal place.

function schoolGrades(inputArrayStrings) {

    let map = new Map();
    for (let line of inputArrayStrings) {

        let splitedLine = line.split(" ");
        let name = splitedLine.shift();
        let grades = splitedLine.map(Number);

        if (!map.has(name)) {
            map.set(name, []);
        }

        for (const grade of grades) {
            map.get(name).push(grade);
        }
    }

    let sorted = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    for (let kvp of sorted) {
        console.log(`${kvp[0]}: ${avgGrade(kvp[1]).toFixed(2)}`);
    }

    function avgGrade(arrayOfGrades) {
        let sum = 0;
        let gradesCounter = 0;

        for (let grade of arrayOfGrades) {
            sum += grade;
            gradesCounter++;
        }
        return sum / gradesCounter
    }
}
schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
])

schoolGrades([
    'Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'
])
