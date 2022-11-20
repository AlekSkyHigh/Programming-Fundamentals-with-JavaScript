// Write a function that converts British pounds to dollars formatted to the 3rd decimal point. 
// •	1 British Pound = 1.31 Dollars

function poundsToDollars (pounds) {

    const poundToDollarValue = 1.31;

    console.log((pounds * poundToDollarValue).toFixed(3));
}
poundsToDollars(80)
poundsToDollars(39)
