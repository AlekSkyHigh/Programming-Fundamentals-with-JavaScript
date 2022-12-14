// You are given a sequence of people and for every person what cards he draws from the deck. The input will be an array of strings. Each string will be in the format:
// {personName}: {PT, PT, PT,… PT}
// Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type. The name can contain any ASCII symbol except ':'. The input will always be valid and in the format described, there is no need to check it.
// A single person cannot have more than one card with the same power and type, if he draws such a card he discards it. The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by the type. Powers 2 to 10 have the same value and J to A are 11 to 14. Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).
// Finally print out the total value each player has in his hand in the format:
// {personName}: {value}

function cardGame(inputArrayStrings) {

    let obj = {};
    let cardValue = 0;

    for (let line of inputArrayStrings) {
        let splitedLine = line.split(": ");
        let player = splitedLine[0];
        let cards = splitedLine[1].split(", ");

        if (!obj.hasOwnProperty(player)) {
            obj[player] = cards;
        } else {
            obj[player] = obj[player].concat(cards);
        }
    };

    for (const key in obj) {                //filtering the unique cards;
        obj[key] = new Set(obj[key])
    };

    for (let key in obj) {                   //for every person 

        for (let card of obj[key]) {         //checking his cards

            let power = card[0];
            let type = card[1];

            if (card.length === 3) {
                power = 10;
                type = card[2];
            }

            cardValue += cardPower(power, type);
        };

        console.log(`${key}: ${cardValue}`);
        cardValue = 0;
    };

    function cardPower(p, t) {

        let power = 0;
        let type = 0;

        switch (p) {
            case "J": power = 11; break;
            case "Q": power = 12; break;
            case "K": power = 13; break;
            case "A": power = 14; break;
            default: power = Number(p); break;
        }

        switch (t) {
            case "S": type = 4; break;
            case "H": type = 3; break;
            case "D": type = 2; break;
            case "C": type = 1; break;
        }

        return power * type;
    };

}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])
