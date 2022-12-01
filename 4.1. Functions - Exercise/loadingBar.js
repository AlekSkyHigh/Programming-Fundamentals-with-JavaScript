// You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...). 
// Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.

function loadingBar(number) {

    let percent = (number / 10);
    let percentVisual = "%".repeat(percent);

    let dots = 10 - (number / 10);
    let dotsVisual = ".".repeat(dots);

    if (number < 100) {
        console.log(`${number}% [${percentVisual}${dotsVisual}]`);
        console.log(`Still loading...`);
    } else {
        console.log(`100% Complete!`);
    }

}
loadingBar(30)
loadingBar(50)
loadingBar(100)
