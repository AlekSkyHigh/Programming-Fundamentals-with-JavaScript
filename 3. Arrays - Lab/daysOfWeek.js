// Write a program, which receives a number and prints the corresponding name of the day of the week (in English).  
// If the number is NOT a valid day, print: "Invalid day!".

function daysOfWeek(number) {

    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    if (number >= 1 && number <= 7) {
        console.log(days[number - 1]);
    } else {
        console.log("Invalid day!");
    }
}
daysOfWeek(3)
daysOfWeek(6)
daysOfWeek(11)

//another solving:
function daysOfWeek(number) {

    if (number === 1) {
        console.log(`Monday`);
    } else if (number === 2) {
        console.log(`Tuesday`);
    } else if (number === 3) {
        console.log(`Wednesday`);
    } else if (number === 4) {
        console.log(`Thursday`);
    } else if (number === 5) {
        console.log(`Friday`);
    } else if (number === 6) {
        console.log(`Saturday`);
    } else if (number === 7) {
        console.log(`Sunday`);
    } else {
        console.log(`Invalid day!`);
    }

}
daysOfWeek(3)
daysOfWeek(6)
daysOfWeek(11)
