// Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder.

function ages(age) {

    if (age >= 0 && age <= 2) {
        console.log(`baby`);
        return;
    } else if (age >= 3 && age <= 13) {
        console.log(`child`);
        return;
    } else if (age >= 14 && age <= 19) {
        console.log(`teenager`);
        return;
    } else if (age >= 20 && age <= 65) {
        console.log(`adult`);
        return;
    } else if (age >= 66) {
        console.log(`elder`);
        return;
    } else {
        console.log(`out of bounds`);
        return;
    }
}
ages(20)
ages(1)
ages(100)
ages(-1)
