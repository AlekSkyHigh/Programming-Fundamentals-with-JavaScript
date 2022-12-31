// Create a program that calculates bonus points for each student enrolled in a course. On the first line, you are going to receive the number of the students. On the second line, you will receive the total number of lectures in the course. The course has an additional bonus, which you will receive on the third line. On the following lines, you will be receiving the count of attendances for each student.
// The bonus is calculated with the following formula:
// {total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})
// Find the student with the maximum bonus and print them, along with his attendances, in the following format:
// "Max Bonus: {max bonus points}."
// "The student has attended {student attendances} lectures."
// Round the bonus points at the end to the nearest larger number.

function bonusScoringSystem(inputArray) {

    let students = Number(inputArray.shift());
    let lectures = Number(inputArray.shift());
    let bonus = Number(inputArray.shift());

    let highestBonus = 0;
    let attendances = 0;

    for (let i = 0; i < inputArray.length; i++) {

        let currentAtt = Number(inputArray[i]);

        let totalBonus = currentAtt / lectures * (5 + bonus);

        if (totalBonus > highestBonus) {
            highestBonus = totalBonus;
            attendances = currentAtt;
        }

    }
    console.log(`Max Bonus: ${Math.round(highestBonus)}.`);
    console.log(`The student has attended ${attendances} lectures.`);

}
bonusScoringSystem([
    '5',    // number of the students 
    '25',   // number of the lectures 
    '30',   // the additional bonus 
    '12',
    '19',
    '24',
    '16',
    '20'
])

bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
])
