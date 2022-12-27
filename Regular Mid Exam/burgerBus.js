function burgerBus(inputArray) {

    let cities = Number(inputArray.shift());

    let currentCity = "";
    let currentIncome = 0;
    let currentExpense = 0;
    let totalProfit = 0;

    let cityCounter = 1;

    while (cityCounter <= cities) {

        currentCity = inputArray.shift();
        currentIncome = Number(inputArray.shift());
        currentExpense = Number(inputArray.shift());

        if (cityCounter % 3 === 0 && cityCounter % 5 !== 0) {
            currentExpense = currentExpense * 1.50;
        }

        if (cityCounter % 5 === 0) {
            currentIncome = currentIncome * 0.90;
        }

        totalProfit += (currentIncome - currentExpense)
        console.log(`In ${currentCity} Burger Bus earned ${(currentIncome - currentExpense).toFixed(2)} leva.`);

        cityCounter++;
    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}
// burgerBus([
//     "3",        //number of cities
//     "Sofia",    //name of the city - string
//     "895.67",   //owners income
//     "213.50",   //owners expenses
//     "Plovdiv",
//     "2563.20",
//     "890.26",
//     "Burgas",
//     "2360.55",
//     "600.00"
// ])

burgerBus(["5",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"])
