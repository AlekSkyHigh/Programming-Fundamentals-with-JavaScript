// Write a program that receives a number of centuries and converts it to years, days, hours, and minutes.

function centuriesToMinutes(centuries) {

    let centuriesInYears = centuries * 100;
    let yearsToDays = Math.trunc(centuriesInYears * 365.2422);
    let daysToHours = yearsToDays * 24;
    let hoursToMinutes = daysToHours * 60;

    console.log(`${centuries} centuries = ${centuriesInYears} years = ${yearsToDays} days = ${daysToHours} hours = ${hoursToMinutes} minutes`);

}
centuriesToMinutes(1)
centuriesToMinutes(5)
