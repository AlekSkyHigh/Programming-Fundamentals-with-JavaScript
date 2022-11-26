// Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number. 

function magicSum(array, magicNum) {

    let result = [];

    for (let i = 0; i < array.length - 1; i++) {

        let currentNum = array[i];

        for (let j = i; j < array.length - 1; j++) {

            let secondCurrent = array[j + 1];

            if (currentNum + secondCurrent === magicNum) {

                result.push(currentNum);
                result.push(secondCurrent);

                console.log(result.join(' '));

                result = [];
            }
        }
    }

}
magicSum([1, 7, 6, 2, 19, 23], 8)
// magicSum([14, 20, 60, 13, 7, 19, 8], 27)
// magicSum([1, 2, 3, 4, 5, 6], 6)
