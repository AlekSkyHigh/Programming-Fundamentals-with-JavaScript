// Merry has a guinea pig named Puppy, that she loves very much. Every month she goes to the nearest pet store and buys him everything he needs – food, hay, and cover.
// On the first three lines, you will receive the quantity of food, hay, and cover, which Merry buys for a month (30 days). On the fourth line, you will receive the guinea pig's weight.
// Every day Puppy eats 300 gr of food. Every second day Merry first feeds the pet, then gives it a certain amount of hay equal to 5% of the rest of the food. On every third day, Merry puts Puppy cover with a quantity of 1/3 of its weight.
// Calculate whether the quantity of food, hay, and cover, will be enough for a month.
// If Merry runs out of food, hay, or cover, stop the program!

// Output
// •	If the food, the hay, and the cover are enough, print:
// o	"Everything is fine! Puppy is happy! Food: {excessFood}, Hay: {excessHay}, Cover: {excessCover}."
// •	If one of the things is not enough, print:
// o	"Merry must go to the pet store!"
// The output values must be formatted to the second decimal place!

function guineaPig(inputArray) {

    let food = Number(inputArray[0]);
    let hay = Number(inputArray[1]);
    let cover = Number(inputArray[2]);
    let puppyWeight = Number(inputArray[3]);

    let daysCounter = 1;
    let hayCounter = 0;
    let coverCounter = 0;

    while (daysCounter <= 30) {

        hayCounter++;
        coverCounter++;

        food -= 0.300;

        if (hayCounter === 2) {
            hay -= 5 * food / 100;
            hayCounter = 0;
        }

        if (coverCounter === 3) {
            cover -= puppyWeight / 3;
            coverCounter = 0;
        }
        
        if (food < 0 || hay < 0 || cover < 0) {
            console.log(`Merry must go to the pet store!`);
            return;
        }

        daysCounter++;
        
    }

    console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);

}
guineaPig([
    "10",   //quantity food in kilograms 
    "5",    //quantity hay in kilograms 
    "5.2",  //quantity cover in kilograms 
    "1"     //guinea's weight in kilograms 
])

guineaPig([
    "1",
    "1.5",
    "3",
    "1.5"
])

guineaPig([
    "9",
    "5",
    "5.2",
    "1"
])
