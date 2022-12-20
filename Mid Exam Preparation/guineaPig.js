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
