function arenaTier(inputArrayStrings) {

    let gladiatorPool = {};

    while (inputArrayStrings[0] !== 'Ave Cesar') {

        if (inputArrayStrings[0].includes('vs')) {

            let tokens = inputArrayStrings.shift().split(" vs ");
            let fighter1 = tokens[0];
            let fighter2 = tokens[1];

            if (gladiatorPool.hasOwnProperty(fighter1) && gladiatorPool.hasOwnProperty(fighter2)) {

                let fighter1techniques = gladiatorPool[fighter1];
                let fighter2techniques = gladiatorPool[fighter2];

                for (let technique in fighter1techniques) {

                    if (fighter2techniques.hasOwnProperty(technique)) {

                        if (fighter1techniques[technique] > fighter2techniques[technique]) {
                            delete gladiatorPool[fighter2];
                        } else if (fighter1techniques[technique] < fighter2techniques[technique]) {
                            delete gladiatorPool[fighter1];
                        }
                    }
                }
            }

        } else {

            let tokens = inputArrayStrings.shift().split(" -> ");
            let name = tokens[0];
            let technique = tokens[1];
            let skill = Number(tokens[2]);

            if (!gladiatorPool.hasOwnProperty(name)) {
                gladiatorPool[name] = {};
            }

            if (!gladiatorPool[name].hasOwnProperty(technique) || gladiatorPool[name][technique] < skill) {
                gladiatorPool[name][technique] = skill;
            }
        }
    }

    for (let gladiator in gladiatorPool) {

        let sum = 0;
        let objOfTechsAndPoints = gladiatorPool[gladiator]

        for (key in objOfTechsAndPoints) {
            sum += objOfTechsAndPoints[key];
        }
        objOfTechsAndPoints['sum'] = sum;
    }

    Object.entries(gladiatorPool).sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0]))
        .forEach(element => {
            console.log(`${element[0]}: ${element[1].sum} skill`);
            delete element[1].sum;
            Object.entries(element[1])
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .forEach(element => {
                    console.log(` - ${element[0]} <!> ${element[1]}`);
                });
        });

}
// arenaTier([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
// ])

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
])
