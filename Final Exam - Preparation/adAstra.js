// You are an astronaut who just embarked on a mission across the solar system. Since you will be in space for a long time, you have packed a lot of food with you. Create a program, which helps you identify how much food you have left and gives you information about its expiration date.
// On the first line of the input, you will be given a text string. You must extract the information about the food and calculate the total calories. 
// First, you must extract the food info. It will always follow the same pattern rules:
// •	It will be surrounded by "|" or "#" (only one of the two) in the following pattern: 
// #{item name}#{expiration date}#{calories}#   or 
// |{item name}|{expiration date}|{calories}|
// •	The item name will contain only lowercase and uppercase letters and whitespace
// •	The expiration date will always follow the pattern: "{day}/{month}/{year}", where the day, month, and year will be exactly two digits long
// •	The calories will be an integer between 0-10000
// Calculate the total calories of all food items and then determine how many days you can last with the food you have. Keep in mind that you need 2000kcal a day.
// Input / Constraints
// •	You will receive a single string
// Output
// •	First, print the number of days you will be able to last with the food you have:
// "You have food to last you for: {days} days!"
// •	The output for each food item should look like this:
// "Item: {item name}, Best before: {expiration date}, Nutrition: {calories}"

// Solve 1 of 2: 
function adAstra(input) {

    let pattern = /(#|\|)(?<itemName>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/gm;
    let inputString = input.toString();

    let matches = inputString.matchAll(pattern);
    let info = [];

    let sumCalories = 0;
    let daysLasting = 0;

    for(let match of matches){

        let item = match.groups.itemName;
        let bestBefore = match.groups.expDate;
        let nutrition = match.groups.calories;

        sumCalories += Number(nutrition);

        info.push(item);
        info.push(bestBefore);
        info.push(nutrition);
    }

    while(sumCalories >= 2000){
        sumCalories -= 2000;
        daysLasting++
    }
    console.log(`You have food to last you for: ${daysLasting} days!`);
    
    for(let i = 0; i < info.length; i+=3){

        console.log(`Item: ${info[i]}, Best before: ${info[i+1]}, Nutrition: ${info[i+2]}`);
    }
}
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])


// Solve 2 of 2:
function adAstra(input) {

    let pattern = /([\|#])(?<name>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/gm;
    let exec = pattern.exec(input);
    let totalKcal = 0;
    let productsHolder = [];
   
    while(exec){

        let name = exec.groups['name'];
        let date = exec.groups['date'];
        let kcal = exec.groups['kcal'];

        totalKcal += Number(kcal);

        let currentProductData = `Item: ${name}, Best before: ${date}, Nutrition: ${kcal}`;
        productsHolder.push(currentProductData);

        exec = pattern.exec(input);
    }

    let days = Math.floor(totalKcal / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    productsHolder.forEach(product => console.log(product));
}
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])





