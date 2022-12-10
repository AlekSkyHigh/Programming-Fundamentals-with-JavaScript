// Write a function that receives array of strings in the following format '{cat name} {age}'.
// Create a Cat class that receives in the constructor the name and the age parsed from the input. 
// It should also have a method named "meow" that will print "{cat name}, age {age} says Meow" on the console.
// For each of the strings provided, you must create a cat object and invoke the .meow () method.

function cats(inputArray) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let catData of inputArray) {
        // let[name, age] = catData.split(" ");
        let splitedData = catData.split(" ");
        let name = splitedData[0];
        let age = Number(splitedData[1]);

        let cat = new Cat(name, age);

        cat.meow();
    }

}
cats(['Mellow 2', 'Tom 5'])
