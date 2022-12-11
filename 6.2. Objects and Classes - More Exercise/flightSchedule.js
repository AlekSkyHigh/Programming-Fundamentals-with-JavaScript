// You will receive an array with arrays.
// The first array (at index 0) will hold all flights on a specific sector in the airport. The second array (at index 1) will contain newly changed statuses of some of the flights at this airport. The third array (at index 2) will have a single string, which will be the flight status you need to check. When you put all flights into an object and change the statuses depends on the new information on the second array. You must print all flights with the given status from the last array.
// •	If the value of the string obtained from the third array is "Ready to fly":
// o	then you must print flights that have not changed their status in the second array 
// o	and automatically change the status to "Ready to fly"
// •	Otherwise, print only flights that have changed their status.

function flightSchedule(arrayWithArrays) {

    let allFlights = arrayWithArrays[0];
    let newlyChangedStatuses = arrayWithArrays[1];
    let finalStatus = arrayWithArrays[2][0];
    let allflightsIntoObject = {};

    for (let flight of allFlights) {

        let [flightNumber, destination, destinationPartTwo] = flight.split(" ");
        if (destinationPartTwo) {
            allflightsIntoObject[flightNumber] = [`${destination} ${destinationPartTwo}`];
        } else {
            allflightsIntoObject[flightNumber] = [destination];
        }
    }

    for (let flight of newlyChangedStatuses) {

        let [flightNumber, status] = flight.split(" ");
        if (allflightsIntoObject.hasOwnProperty(flightNumber)) {
            allflightsIntoObject[flightNumber].push(status);
        }
    }

    if (finalStatus === 'Cancelled') {
        for (const flight in allflightsIntoObject) {
            if (allflightsIntoObject[flight][1]) {
                console.log(`{ Destination: '${allflightsIntoObject[flight][0]}', Status: '${allflightsIntoObject[flight][1]}' }`);
            }
        }
    } else {
        for (const flight in allflightsIntoObject) {
            if (!allflightsIntoObject[flight][1]) {
                console.log(`{ Destination: '${allflightsIntoObject[flight][0]}', Status: 'Ready to fly' }`);
            }
        }
    }

}
flightSchedule([
    ['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'],
    ['Cancelled']
]
)

// flightSchedule([['WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'],
// ['DL2120 Cancelled',
//     'WN612 Cancelled',
//     'WN1173 Cancelled',
//     'SK330 Cancelled'],
// ['Ready to fly']
// ]
// )
