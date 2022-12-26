// Solve 1 of 2:
function pirates(inputArrayStrings) {

    let line = inputArrayStrings.shift();
    let city = line.split('||')[0];
    let targets = {};

    while (city !== "Sail") {

        let population = Number(line.split("||")[1]);
        let gold = Number(line.split("||")[2]);

        if (!targets[city]) {
            targets[city] = { population, gold };
        } else {
            targets[city].population += population;
            targets[city].gold += gold;
        }

        line = inputArrayStrings.shift();
        city = line.split('||')[0];
    }

    let row = inputArrayStrings.shift();
    let command = row.split('=>')[0];

    while (command !== 'End') {

        let value1 = row.split('=>')[1];
        let value2 = Number(row.split('=>')[2]);
        let value3 = Number(row.split('=>')[3]);

        switch (command) {
            case "Plunder": plunder(value1, value2, value3); break;
            case "Prosper": prosper(value1, value2); break;
        }

        row = inputArrayStrings.shift();
        command = row.split('=>')[0];
    }

    function plunder(cityInvaded, peopleKilled, goldStolen) {

        if (targets[cityInvaded]) {
            targets[cityInvaded].population -= peopleKilled;
            targets[cityInvaded].gold -= goldStolen;
            console.log(`${cityInvaded} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`);
        }

        if (targets[cityInvaded].population <= 0 || targets[cityInvaded].gold <= 0) {
            delete targets[cityInvaded];
            console.log(`${cityInvaded} has been wiped off the map!`);
        }
    }

    function prosper(givenCity, givenGold) {

        if (givenGold < 0) {
            console.log(`Gold added cannot be a negative number!`);
            return;
        } else {
            targets[givenCity].gold += givenGold;
            console.log(`${givenGold} gold added to the city treasury. ${givenCity} now has ${targets[givenCity].gold} gold.`);
        }
    }

    if (Object.keys(targets).length > 0) {
        console.log(`Ahoy, Captain! There are ${Object.keys(targets).length} wealthy settlements to go to:`);

        let resultInfo = Object.entries(targets);

        for (let object of resultInfo) {
            console.log(`${object[0]} -> Population: ${object[1].population} citizens, Gold: ${object[1].gold} kg`);
        }

    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }

}
pirates([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
])

// pirates(["Nassau||95000||1000", "San Juan||930000||1250", "Campeche||270000||690", "Port Royal||320000||1000", "Port Royal||100000||2000", "Sail", "Prosper=>Port Royal=>-200", "Plunder=>Nassau=>94000=>750", "Plunder=>Nassau=>1000=>150", "Plunder=>Campeche=>150000=>690", "End"])


// Sovle 2 of 2:
function pirates(input) {

    let cities = {};
    let array = [];

    while (input[0] !== 'Sail') {
        let tokens = input.shift().split('||');

        let city = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);

        let cityCheck = array.find((cityName) => cityName.city === city);
        let index = array.indexOf(cityCheck);

        if (cityCheck) {
            array[index].population += population;
            array[index].gold += gold;
        } else {
            cities = { city, population, gold };
            array.push(cities);
        }
    }
    // array.forEach(ob => console.log(ob));

    while (input[0] !== 'End') {
        let tokens = input.shift().split('=>');
        let command = tokens.shift();

        switch (command) {
            case "Plunder":
                let cityInvaded = tokens[0];
                let peopleKilled = Number(tokens[1]);
                let goldStolen = Number(tokens[2]);

                console.log(`${cityInvaded} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`)

                let cityCheck = array.find((cityName) => cityName.city === cityInvaded);
                let index = array.indexOf(cityCheck);

                array[index].population -= peopleKilled;
                array[index].gold -= goldStolen;

                if (array[index].population <= 0 || array[index].gold <= 0) {
                    array.splice(index, 1);
                    console.log(`${cityInvaded} has been wiped off the map!`);
                }
                break;
            case "Prosper":
                let givenCity = tokens[0];
                let givenGold = Number(tokens[1]);

                if (givenGold < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                } else {
                    let cityCheck = array.find((cityName) => cityName.city === givenCity);
                    let index = array.indexOf(cityCheck);

                    array[index].gold += givenGold;
                    console.log(`${givenGold} gold added to the city treasury. ${givenCity} now has ${array[index].gold} gold.`);
                }
                break;
        }
    }

    if (array.length !== 0) {
        console.log(`Ahoy, Captain! There are ${array.length} wealthy settlements to go to:`);
        array.forEach(obj => console.log(`${obj.city} -> Population: ${obj.population} citizens, Gold: ${obj.gold} kg`))
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }

}
pirates([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
])

// pirates(["Nassau||95000||1000", "San Juan||930000||1250", "Campeche||270000||690", "Port Royal||320000||1000", "Port Royal||100000||2000", "Sail", "Prosper=>Port Royal=>-200", "Plunder=>Nassau=>94000=>750", "Plunder=>Nassau=>1000=>150", "Plunder=>Campeche=>150000=>690", "End"])
