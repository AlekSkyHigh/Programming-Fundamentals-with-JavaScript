// Input
// •	On the first line of the standard input, you will receive an integer n
// •	On the following n lines, the heroes themselves will follow with their hit points and mana points separated by a space in the following format
// •	You will be receiving different commands, each on a new line, separated by " – ", until the "End" command is given
// Output
// •	Print all members of your party who are still alive, in the following format (their HP/MP need to be indented 2 spaces):
// "{hero name}
//   HP: {current HP}
//   MP: {current MP}"

function heroesOfCodeAndLogicVII(inputArrayStrings) {

    let heroesAvailable = Number(inputArrayStrings.shift());
    let heroesInfo = {};
    let array = [];

    for (let i = 0; i < heroesAvailable; i++) {

        let tokens = inputArrayStrings.shift().split(" ");

        let heroName = tokens[0];
        let hitPoints = Number(tokens[1]);
        let manaPoints = Number(tokens[2]);

        heroesInfo = { heroName, hitPoints, manaPoints };
        array.push(heroesInfo);
    }

    while (inputArrayStrings[0] !== "End") {

        let tokens = inputArrayStrings.shift().split(" - ");
        let action = tokens.shift();

        switch (action) {
            case "CastSpell": {
                let givenName = tokens[0];
                let manaNeeded = Number(tokens[1]);
                let spellName = tokens[2];

                let nameCheck = array.find((nameOfHero) => nameOfHero.heroName === givenName);
                let index = array.indexOf(nameCheck);

                if (array[index].manaPoints >= manaNeeded) {
                    array[index].manaPoints -= manaNeeded;
                    console.log(`${givenName} has successfully cast ${spellName} and now has ${array[index].manaPoints} MP!`);
                } else {
                    console.log(`${givenName} does not have enough MP to cast ${spellName}!`);
                }

            } break;

            case "TakeDamage": {
                let givenName = tokens[0];
                let damage = Number(tokens[1]);
                let attacker = tokens[2];

                let nameCheck = array.find((nameOfHero) => nameOfHero.heroName === givenName);
                let index = array.indexOf(nameCheck);

                array[index].hitPoints -= damage;

                if (array[index].hitPoints > 0) {
                    console.log(`${givenName} was hit for ${damage} HP by ${attacker} and now has ${array[index].hitPoints} HP left!`);
                } else {
                    array.splice(index, 1);
                    console.log(`${givenName} has been killed by ${attacker}!`);
                }

            } break;

            case "Recharge": {
                let givenName = tokens[0];
                let healAmount = Number(tokens[1]);

                let nameCheck = array.find((nameOfHero) => nameOfHero.heroName === givenName);
                let index = array.indexOf(nameCheck)

                array[index].manaPoints += healAmount;
                let currentMp = array[index].manaPoints;

                if (array[index].manaPoints > 200) {
                    array[index].manaPoints = 200;
                    console.log(`${givenName} recharged for ${array[index].manaPoints - (currentMp - healAmount)} MP!`);
                } else {
                    console.log(`${givenName} recharged for ${healAmount} MP!`);
                }

            } break;

            case "Heal": {
                let givenName = tokens[0];
                let healAmount = Number(tokens[1]);

                let nameCheck = array.find((nameOfHero) => nameOfHero.heroName === givenName);
                let index = array.indexOf(nameCheck);

                array[index].hitPoints += healAmount;
                let currentHp = array[index].hitPoints;

                if (array[index].hitPoints > 100) {
                    array[index].hitPoints = 100;
                    console.log(`${givenName} healed for ${array[index].hitPoints - (currentHp - healAmount)} HP!`);
                } else {
                    console.log(`${givenName} healed for ${healAmount} HP!`);
                }

            } break;
        }
    }

    array.forEach(obj => console.log(`${obj.heroName}\n  HP: ${obj.hitPoints}\n  MP: ${obj.manaPoints}`));

}

heroesOfCodeAndLogicVII([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
])

// heroesOfCodeAndLogicVII([
//     "4",
//     "Adela 90 150",
//     "SirMullich 70 40",
//     "Ivor 1 111",
//     "Tyris 94 61",
//     "Heal - SirMullich - 50",
//     "Recharge - Adela - 100",
//     "CastSpell - Tyris - 1000 - Fireball",
//     "TakeDamage - Tyris - 99 - Fireball",
//     "TakeDamage - Ivor - 3 - Mosquito",
//     "End"
// ])
