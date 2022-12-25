// You will be given a string representing some places on the map. You have to filter only the valid ones. A valid location is:
// •	Surrounded by "=" or "/" on both sides (the first and the last symbols must match)
// •	After the first "=" or "/" there should be only letters (the first must be upper-case, other letters could be upper or lower-case)
// •	The letters must be at least 3
// After you have matched all the valid locations, you have to calculate travel points. They are calculated by summing the lengths of all the valid destinations that you have found on the map. 
// In the end, on the first line, print: "Destinations: {destinations joined by ', '}". 
// On the second line, print "Travel Points: {travel_points}".

function destinationMapper(text) {

    let pattern = /([=|\/]{1})(?<places>[A-Z][A-Za-z]{2,})\1/g;

    let validPlaces = text.matchAll(pattern);
    let destinations = [];
    let travelPoints = 0;

    for (const match of validPlaces) {
        let currentDestination = match[2];
        travelPoints += currentDestination.length;
        destinations.push(currentDestination);
    }

    console.log(`Destinations: ${destinations.join(`, `)}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
destinationMapper("ThisIs some InvalidInput")
