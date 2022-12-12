// In this problem, you have to arrange all students by grade. You as the secretary of the school principal will process students and store them into a school register before the new school year hits. As a draft, you have a list of all the students from last year but mixed. Keep in mind that if a student has a lower score than 3, he does not go into the next class. As a result of your work, you have to print the entire school register sorted in ascending order by grade already filled with all the students from last year in the format:
// `{nextGrade} Grade
// List of students: {All students in that grade}
// Average annual score from last year: {average annual score on the entire class from last year}`
// And empty row {console.log}
// The input will be an array with strings, each containing a student's name, last year's grade, and an annual score. The average annual score from last year should be formatted to the second decimal point.

function schoolRegister(inputStrings) {

    let arrOfObjects = inputStrings.map((line) => {
        let [name, grade, score] = line.split(", ")
        name = name.split(": ")[1];
        grade = grade.split(": ")[1];
        score = score.split(": ")[1];
        return { name, grade: Number(grade), score: Number(score) };
    });

    let sortedForPrint = {};

    arrOfObjects.sort((person1, person2) => person1.grade - person2.grade)
        .filter((person) => person.score >= 3)
        .forEach(person => {
            let grade = new String(person.grade);
            if (!sortedForPrint[grade]) {
                sortedForPrint[grade] = [];
            }
            sortedForPrint[grade].push(person);
        });

    for (let key of Object.keys(sortedForPrint)) {
        let averageScore = 0;
        let studentsPrint = `List of students: `;
        console.log(`${Number(key) + 1} Grade`);

        sortedForPrint[key].forEach((person, index) => {
            if (index === sortedForPrint[key].length - 1) {
                studentsPrint += person.name;
            } else {
                studentsPrint += person.name + ', ';
            }
            averageScore += Number(person.score);
        });
        console.log(studentsPrint);
        console.log('Average annual score from last year: ' + (averageScore / sortedForPrint[key].length).toFixed(2));
        console.log('');
    };
}
// schoolRegister([
//     "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//     "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
// ])

schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
])
