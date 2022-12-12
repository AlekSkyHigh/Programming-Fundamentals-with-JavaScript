// Write a function that manages meeting appointments. 
// The input comes as an array of strings. Each string contains a weekday and person’s name. 
// For each successful meeting, print a message. If you receive the same weekday twice, the meeting cannot be scheduled so print a conflicting message. 
// In the end, print a list of all successful meetings. 

function meetings(inputStrings) {

    let calendar = {};

    for (let line of inputStrings) {

        let [day, name] = line.split(" ");

        if (calendar[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            calendar[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    let calendarArr = Object.entries(calendar)
    
    for (let output of calendarArr) {
        console.log(`${output[0]} -> ${output[1]}`);
    }
}
meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
])

meetings([
    'Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'
])
