// Write a function, which receives two string arrays and merges them into a third array.  
// •	If the index of the element is even, add into the third array the sum of both elements at that index
// •	If the index of the element is odd, add the concatenation of both elements at that index

function mergeArrays(firstArray, secondArray) {

    let resultArray = [];
    let firstArrayLength = firstArray.length

    for (let i = 0; i < firstArrayLength; i++) {

        if (i % 2 === 0) {
            resultArray.push(Number(firstArray[i]) + Number(secondArray[i]));
        } else {
            resultArray.push(firstArray[i] + secondArray[i])
        }
    }
    console.log(resultArray.join(' - '));

}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44'])
