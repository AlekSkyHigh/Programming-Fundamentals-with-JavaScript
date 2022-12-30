function heroRecruitment(inputArrayStrings) {

    let heroInfo = {};
    let heroesCollection = [];

    while (inputArrayStrings[0] !== "End") {

        let tokens = inputArrayStrings.shift().split(" ");
        let command = tokens[0];

        switch (command) {

            case "Enroll": {
                let givenHeroName = tokens[1];

                let nameCheck = heroesCollection.find((nameOfHero) => nameOfHero.givenHeroName === givenHeroName);

                if (nameCheck) {
                    console.log(`${givenHeroName} is already enrolled.`);
                } else {
                    heroInfo = { givenHeroName, spellBook: [] };
                    heroesCollection.push(heroInfo)
                }

            } break;

            case "Learn": {
                let givenHeroName = tokens[1];
                let givenSpellName = tokens[2];

                let nameCheck = heroesCollection.find((nameOfHero) => nameOfHero.givenHeroName === givenHeroName);

                if (!nameCheck) {
                    console.log(`${givenHeroName} doesn't exist.`);
                } else {
                    if (nameCheck.spellBook.includes(givenSpellName)) {
                        console.log(`${givenHeroName} has already learnt ${givenSpellName}.`);
                    } else {
                        nameCheck.spellBook.push(givenSpellName);
                    }
                }

            } break;

            case "Unlearn": {
                let givenHeroName = tokens[1];
                let givenSpellName = tokens[2];

                let nameCheck = heroesCollection.find((nameOfHero) => nameOfHero.givenHeroName === givenHeroName);
                let index = heroesCollection.indexOf(nameCheck);

                if (!nameCheck) {
                    console.log(`${givenHeroName} doesn't exist.`);
                } else {
                    if (!nameCheck.spellBook.includes(givenSpellName)) {
                        console.log(`${givenHeroName} doesn't know ${givenSpellName}.`);
                    } else {
                        nameCheck.spellBook.splice(index, 1);
                    }
                }

            } break;
        }
    }
    console.log(`Heroes:`);
    heroesCollection.forEach(obj => console.log(`== ${obj.givenHeroName}: ${obj.spellBook.join(", ")}`));

}
heroRecruitment([
    "Enroll Stefan",
    "Enroll Peter",
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn John ItShouldNotWork",
    "Unlearn George Dispel",
    "Unlearn Stefan ItShouldWork",
    "End"
])

// heroRecruitment(["Enroll Stefan",
//     "Learn Stefan ItShouldWork",
//     "Learn Stefan ItShouldWork",
//     "Unlearn Stefan NotFound",
//     "End"])

// heroRecruitment(["Enroll Stefan",
//     "Enroll Peter",
//     "Enroll John",
//     "Learn Stefan Spell",
//     "Learn Peter Dispel",
//     "End"])


