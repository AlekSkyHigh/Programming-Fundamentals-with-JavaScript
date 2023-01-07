// You have now returned from your world tour. On your way, you have discovered some new plants, and you want to gather some information about them and create an exhibition to see which plant is highest rated.
// On the first line, you will receive a number n. On the next n lines, you will be given some information about the plants that you have discovered in the format: "{plant}<->{rarity}". Store that information because you will need it later. If you receive a plant more than once, update its rarity.
// After that, until you receive the command "Exhibition", you will be given some of these commands:
// •	"Rate: {plant} - {rating}" – add the given rating to the plant (store all ratings)
// •	"Update: {plant} - {new_rarity}" – update the rarity of the plant with the new one
// •	"Reset: {plant}" – remove all the ratings of the given plant
// Note: If any given plant name is invalid, print "error"
// After the command "Exhibition", print the information that you have about the plants in the following format:
// "Plants for the exhibition:
// - {plant_name1}; Rarity: {rarity}; Rating: {average_rating}
// - {plant_name2}; Rarity: {rarity}; Rating: {average_rating}
// …
// - {plant_nameN}; Rarity: {rarity}; Rating: {average_rating}"
// The average rating should be formatted to the second decimal place.

function plantDiscovery(input) {
    // initial variables
    const plantCount = Number(input.shift());
    let plants = {};

    // collect initial plants
    for (let i = 0; i < plantCount; i++) {
        // collect plant data
        let [name, rarity] = line.split('<->');

        // store plant data
        plants[name] = {
            rarity: Number(rarity),
            ratings: [],
        };
    }

    // loop through commands
    let line = input.shift(); // 'Rate: Woodii - 10'
    while (line != 'Exhibition') {
        // extract data from line
        let [command, args] = line.split(': ');  
        let [name, argument] = args.split(' - ');
        let plant = plants[name];
        
        if (plant) {
            switch (command) {
                case 'Rate':
                    let rating = Number(argument);
                    plant.ratings.push(rating);
                    break;
                case 'Update':
                    let rarity = Number(argument);
                    plant.rarity = rarity;
                    break;
                case 'Reset':
                    plant.ratings = [];
                    break;
            }
        } else {
            console.log('error');
        }

        line = input.shift();
    }

    // print result
    console.log('Plants for the exhibition:');
    for (const name in plants) {
        // calculate average rating
        let averageRating = average(plants[name].ratings);
        
        // print plant information
        console.log(`- ${name}; Rarity: ${plants[name].rarity}; Rating: ${averageRating.toFixed(2)}`);
    }

    function average(numbers) {
        if (numbers.length === 0) {
            return 0;
        }

        let sum = numbers.reduce((s, num) => s + num, 0);
        let result = sum / numbers.length;
       
        return result;
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);
