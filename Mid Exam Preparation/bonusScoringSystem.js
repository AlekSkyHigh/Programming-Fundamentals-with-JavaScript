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
