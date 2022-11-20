// As a gladiator, Peter has to repair his broken equipment when he loses a fight. His equipment consists of a helmet, sword, shield, and armor. You will receive Peter`s lost fights count. 
// •	Every second lost game, his helmet is broken.
// •	Every third lost game, his sword is broken.
// •	When both his sword and helmet are broken in the same lost fight, his shield also breaks.
// •	Every second time, when his shield brakes, his armor also needs to be repaired. 
// You will receive the price of each item in his equipment. Calculate his expenses for the year for renewing his equipment. 

function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let lostFightCounter = 0;
    let expenses = 0;
    let shielBreakCounder = 0;

    for (let i = 1; i <= lostFights; i++) {

        lostFightCounter++;

        if (lostFightCounter % 2 === 0) {

            expenses += helmetPrice;
        }

        if (lostFightCounter % 3 === 0) {

            expenses += swordPrice;
        }

        if (lostFightCounter % 2 === 0 && lostFightCounter % 3 === 0) {

            expenses += shieldPrice;
            shielBreakCounder++;

            if (shielBreakCounder % 2 === 0) {

                expenses += armorPrice;
            }
        }

    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}
gladiatorExpenses(7, 2, 3, 4, 5)
gladiatorExpenses(23, 12.50, 21.50, 40, 200)
