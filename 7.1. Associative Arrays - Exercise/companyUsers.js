// Write a function, which keeps the information about companies and their employees. 
// You will receive an array of strings containing the company name and employee's id. Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.
// When you finish reading data, order the companies by their name in ascending order. 

function companyUsers(inputArrayStrings) {

    let obj = {};

    for (let line of inputArrayStrings) {
        let splitedLine = line.split(" -> ");
        let company = splitedLine[0];
        let employee = splitedLine[1];

        if (!obj[company]) {
            obj[company] = [];
        }
        obj[company].push(employee);
    }

    let sorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    for (let print of sorted) {

        console.log(print[0]);

        let uniqueIDs = new Set(print[1]);

        for(let id of uniqueIDs){
            console.log(`-- ${id}`);
        }
    };

}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])
