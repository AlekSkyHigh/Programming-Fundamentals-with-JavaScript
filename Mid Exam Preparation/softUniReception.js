// Solve 1 of 2:
function softUniReception(array) {

    let studentsCount = Number(array.pop());
    let efficiencyPerHour = Number(array[0]) + Number(array[1]) + Number(array[2]);
    let time = 0;
    let breakCounter = 0;

    for (let i = 0; studentsCount > 0; i++) {

        time++;
        breakCounter++;
        if (breakCounter === 4) {
            breakCounter = 0;
            continue;
        }
        studentsCount -= efficiencyPerHour;

    }
    console.log(`Time needed: ${time}h.`);

}
softUniReception(['5', '6', '4', '20'])
softUniReception(['1', '2', '3', '45'])
softUniReception(['3', '2', '5', '40'])


//  Solve 2 of 2: 
function softUniReception(constraints) {

    let firstEmployeeEficiency = Number(constraints.shift());
    let secondEmployeeEficiency = Number(constraints.shift());
    let thirdEmployeeEficiency = Number(constraints.shift());
    let studentsCount = Number(constraints.shift());
    let hoursCounter = 0;
    let breakCounter = 0

    while (studentsCount > 0) {

        hoursCounter++;
        breakCounter++

        if (breakCounter === 4) {
            breakCounter = 0;
            continue;
        }

        studentsCount -= firstEmployeeEficiency;
        studentsCount -= secondEmployeeEficiency;
        studentsCount -= thirdEmployeeEficiency;

        if (studentsCount < 0) {
            studentsCount = 0;
        }

    }
    console.log(`Time needed: ${hoursCounter}h.`);
}
softUniReception(['5', '6', '4', '20'])
softUniReception(['1', '2', '3', '45'])
softUniReception(['3', '2', '5', '40'])
