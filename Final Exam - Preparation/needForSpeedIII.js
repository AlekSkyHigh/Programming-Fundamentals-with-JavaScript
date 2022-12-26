function needForSpeedIII(inputArrayStrings) {

    let availableCarsCount = Number(inputArrayStrings.shift());
    let carInfo = {};
    let carsCollection = [];

    for (let i = 0; i < availableCarsCount; i++) {

        let tokens = inputArrayStrings.shift().split("|");
        let car = tokens[0];
        let mileage = Number(tokens[1]);
        let fuel = Number(tokens[2]);

        carInfo = { car, mileage, fuel };
        carsCollection.push(carInfo);
    }

    while (inputArrayStrings[0] !== "Stop") {

        let tokens = inputArrayStrings.shift().split(" : ");
        let command = tokens[0];

        switch (command) {
            case "Drive": {
                let givenCar = tokens[1];
                let givenDistance = Number(tokens[2]);
                let givenFuel = Number(tokens[3]);

                let carCheck = carsCollection.find((carName) => carName.car === givenCar);
                let index = carsCollection.indexOf(carCheck);

                if (carsCollection[index].fuel >= givenFuel) {
                    carsCollection[index].fuel -= givenFuel;
                    carsCollection[index].mileage += givenDistance;
                    console.log(`${givenCar} driven for ${givenDistance} kilometers. ${givenFuel} liters of fuel consumed.`);
                } else {
                    console.log(`Not enough fuel to make that ride`);
                }

                if (carsCollection[index].mileage >= 100000) {
                    carsCollection.splice(index, 1);
                    console.log(`Time to sell the ${givenCar}!`);
                }

            } break;

            case "Refuel": {
                let givenCar = tokens[1];
                let givenFuel = Number(tokens[2]);

                let carCheck = carsCollection.find((carName) => carName.car === givenCar);
                let index = carsCollection.indexOf(carCheck);

                carsCollection[index].fuel += givenFuel;
                let currentFuel = carsCollection[index].fuel

                if (carsCollection[index].fuel > 75) {
                    carsCollection[index].fuel = 75;
                }
                console.log(`${givenCar} refueled with ${carsCollection[index].fuel - (currentFuel - givenFuel)} liters`);

            } break;

            case "Revert": {
                let givenCar = tokens[1];
                let givenKilometers = Number(tokens[2]);

                let carCheck = carsCollection.find((carName) => carName.car === givenCar);
                let index = carsCollection.indexOf(carCheck);

                carsCollection[index].mileage -= givenKilometers;

                if (carsCollection[index].mileage < 10000) {
                    carsCollection[index].mileage = 10000;
                } else {
                    console.log(`${givenCar} mileage decreased by ${givenKilometers} kilometers`);
                }

            } break;
        }

    }

    carsCollection.forEach(obj => console.log(`${obj.car} -> Mileage: ${obj.mileage} kms, Fuel in the tank: ${obj.fuel} lt.`));
}
needForSpeedIII([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])

// needForSpeedIII([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'
// ]
// )
