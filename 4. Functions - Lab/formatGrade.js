// Write a function that receives a grade between 2.00 and 6.00 and prints a formatted line with grade and description.
// •	< 3.00 - "Fail"
// •	>= 3.00 and < 3.50 - "Poor"
// •	>= 3.50 and < 4.50 - "Good"
// •	>= 4.50 and < 5.50 - "Very good"
// •	>= 5.50 - "Excellent"

//Solve 1: 
function formatGrade(grade) {

    if (grade < 3.00) {
        console.log(`Fail (2)`);
    } else if (grade < 3.50) {
        console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade < 4.50) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade < 5.50) {
        console.log(`Very good (${grade.toFixed(2)})`);
    } else if (grade >= 5.50) {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}
formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99)

//Solve 2:
function formatGrade(grade) {

    let word = '';

    if (grade < 3.00) {
        word = 'Fail'
    } else if (grade < 3.50) {
        word = 'Poor';
    } else if (grade < 4.50) {
        word = 'Good';
    } else if (grade < 5.50) {
        word = 'Very good';
    } else if (grade >= 5.50) {
        word = 'Excellent';
    }

    if (word === 'Fail') {
        console.log(`${word} (2)`);
    } else {
        console.log(`${word} (${grade.toFixed(2)})`);
    }
}
formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99)
