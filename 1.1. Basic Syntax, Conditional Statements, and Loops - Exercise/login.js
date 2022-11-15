// * Login
// You will be given a string representing a username. The correct password will be that username reversed. 
// Until you receive the correct password print on the console: "Incorrect password. Try again.". 
// When you receive the correct password print: "User {username} logged in." 
// However, on the fourth try if the password is still not correct print: "User {username} blocked!" and end the program. 
// The input comes as an array of strings - the first string represents username and each subsequent string is a password.


function login(input) {

    let userName = input[0]
    let password = userName.split("").reverse().join("");
    let index = 1;
    let command = input[index]
    index++;
    let tryCounter = 0;

    while (command !== password) {

        let currentUserName = command;

        if (currentUserName !== password) {
            tryCounter++;

            if (tryCounter >= 4) {
                console.log(`User ${userName} blocked!`);
                return;
            } else {
                console.log("Incorrect password. Try again.");
            }
        }

        command = input[index]
        index++

    }

    if (command === password) {
        console.log(`User ${userName} logged in.`);
    }

}
login(['Acer', 'login', 'go', 'let me in', 'recA'])
// login(['momo','omom'])
// login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])
