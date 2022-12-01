// Write a function that checks if a given password is valid. Password validations are:
// •	The length should be 6 - 10 characters (inclusive)
// •	It should consist only of letters and digits
// •	It should have at least 2 digits 
// If a password is a valid print: "Password is valid".
// If it is NOT valid, for every unfulfilled rule print a message:
// •	"Password must be between 6 and 10 characters"
// •	"Password must consist only of letters and digits"
// •	"Password must have at least 2 digits"

function passwordValidator(password) {

    let passwordLength = password.length;
    let digitsCounter = 0;
    let isSymbol = false;

    for (let i = 0; i < passwordLength; i++) {

        let currentChar = password[i].charCodeAt();

        let isDigit = currentChar >= 48 && currentChar <= 57;
        let isSmallLetter = currentChar >= 97 && currentChar <= 122;
        let isCapitalLetter = currentChar >= 65 && currentChar <= 90;

        if (isDigit) {
            digitsCounter++;
        }
        if (!isDigit && !isSmallLetter && !isCapitalLetter) {
            isSymbol = true;
        }
    }

    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (isSymbol) {
        console.log("Password must consist only of letters and digits");
    }
    if (digitsCounter < 2) {
        console.log("Password must have at least 2 digits");
    }
    if (digitsCounter >= 2 && !isSymbol && (password.length >= 6 && password.length <= 10)) {
        console.log("Password is valid");
    }

}
passwordValidator('logIn');
// passwordValidator('MyPass123');
// passwordValidator('Pa$s$s');
