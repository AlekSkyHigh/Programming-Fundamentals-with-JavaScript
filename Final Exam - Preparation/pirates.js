// Anno 1681. The Caribbean. The golden age of piracy. You are a well-known pirate captain by the name of Jack Daniels. Together with your comrades Jim (Beam) and Johnny (Walker), you have been roaming the seas, looking for gold and treasure… and the occasional killing, of course. Go ahead, target some wealthy settlements and show them the pirate's way!
// Until the "Sail" command is given, you will be receiving:
// •	You and your crew have targeted cities, with their population and gold, separated by "||".
// •	If you receive a city that has already been received, you have to increase the population and gold with the given values.
// After the "Sail" command, you will start receiving lines of text representing events until the "End" command is given. 
// Events will be in the following format:
// •	"Plunder=>{town}=>{people}=>{gold}"
// o	You have successfully attacked and plundered the town, killing the given number of people and stealing the respective amount of gold. 
// o	For every town you attack print this message: "{town} plundered! {gold} gold stolen, {people} citizens killed."
// o	If any of those two values (population or gold) reaches zero, the town is disbanded.
// 	You need to remove it from your collection of targeted cities and print the following message: "{town} has been wiped off the map!"
// o	There will be no case of receiving more people or gold than there is in the city.
// •	"Prosper=>{town}=>{gold}"
// o	There has been dramatic economic growth in the given city, increasing its treasury by the given amount of gold.
// o	The gold amount can be a negative number, so be careful. If a negative amount of gold is given, print: "Gold added cannot be a negative number!" and ignore the command.
// o	If the given gold is a valid amount, increase the town's gold reserves by the respective amount and print the following message: 
// "{gold added} gold added to the city treasury. {town} now has {total gold} gold."
// Input
// •	On the first lines, until the "Sail" command, you will be receiving strings representing the cities with their gold and population, separated by "||"
// •	On the following lines, until the "End" command, you will be receiving strings representing the actions described above, separated by "=>"
// Output
// •	After receiving the "End" command, if there are any existing settlements on your list of targets, you need to print all of them, in the following format:
// "Ahoy, Captain! There are {count} wealthy settlements to go to:
// {town1} -> Population: {people} citizens, Gold: {gold} kg
// {town2} -> Population: {people} citizens, Gold: {gold} kg
//    …
// {town…n} -> Population: {people} citizens, Gold: {gold} kg"
// •	If there are no settlements left to plunder, print:
// "Ahoy, Captain! All targets have been plundered and destroyed!"
// Constraints
// •	The initial population and gold of the settlements will be valid 32-bit integers, never negative, or exceed the respective limits.
// •	The town names in the events will always be valid towns that should be on your list.


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

pirates(["Nassau||95000||1000", "San Juan||930000||1250", "Campeche||270000||690", "Port Royal||320000||1000", "Port Royal||100000||2000", "Sail", "Prosper=>Port Royal=>-200", "Plunder=>Nassau=>94000=>750", "Plunder=>Nassau=>1000=>150", "Plunder=>Campeche=>150000=>690", "End"])


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
