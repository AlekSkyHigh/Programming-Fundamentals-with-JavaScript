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





