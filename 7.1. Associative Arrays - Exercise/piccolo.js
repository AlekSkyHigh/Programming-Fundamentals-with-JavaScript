// Write a function that:
// •	Records a car number for every car that enters the parking lot
// •	Removes a car number when the car goes out
// •	Input will be an array of strings in format [direction, carNumber]
// Print the output with all car numbers which are in the parking lot sorted in ascending by number.
// If the parking lot is empty, print: "Parking Lot is Empty".

function piccolo(inputArrayStrings) {

    let parking = new Map;

    inputArrayStrings.map(el => el.split(", "))
        .forEach(element => {
            let direction = element[0];
            let carNumber = element[1];

            if (direction === "IN") {
                parking.set(carNumber, direction);
            } else if (direction === "OUT") {
                parking.delete(carNumber);
            }
        });

    let sortedCarNumbers = Array.from(parking).sort((a, b) => a[0].localeCompare(b[0]));

    if (sortedCarNumbers.length === 0) {
        console.log(`Parking Lot is Empty`);
        return;
    }
    sortedCarNumbers.forEach((carNumber) => console.log(carNumber[0]));
}
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
])

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
])
