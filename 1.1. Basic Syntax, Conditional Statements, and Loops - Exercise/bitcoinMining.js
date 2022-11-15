// * Bitcoin "Mining"
// Write a JavaScript program that calculates the total amount of bitcoins you purchased with the gold you mined during your shift at the mine. Your shift consists of a certain number of days where you mine an amount of gold in grams. Your program will receive an array with the amount of gold you mined each day, where the first day of your shift is the first index of the array. Also, someone was stealing every third day from the start of your shift 30% from the mined gold for this day. You need to check, which day you have enough money to buy your first bitcoin. For the different exchanges use these prices: 1 Bitcoin	11949.16 lv. | 1 g of gold	67.51 lv.

function bitcoinMining(input) {

    let money = 0;
    let bitcoinBought = 0;
    let bitcoinPrice = 11949.16;
    let dayCounter = 0;
    let stealCounter = 0;
    let firstPurchase = 0;

    for (let i = 0; i < input.length; i++) {

        dayCounter++;
        stealCounter++;

        let currentDay = input[i]

        if (stealCounter === 3) {
            currentDay = currentDay * 0.70;
            stealCounter = 0;
        }

        money += (currentDay * 67.51)

        while (money >= bitcoinPrice) {
            bitcoinBought++;
            money -= bitcoinPrice

            if (firstPurchase === 0) {
                firstPurchase = dayCounter;
            }
        }

    };

    if (bitcoinBought === 0) {
        console.log(`Bought bitcoins: ${bitcoinBought}`);
        console.log(`Left money: ${money.toFixed(2)} lv.`);
        return;
    };

    console.log(`Bought bitcoins: ${bitcoinBought}`);
    console.log(`Day of the first purchased bitcoin: ${firstPurchase}`);
    console.log(`Left money: ${money.toFixed(2)} lv.`);

}
// bitcoinMining([100, 200, 300])
bitcoinMining([50, 100])
// bitcoinMining([3124.15, 504.212, 2511.124])
