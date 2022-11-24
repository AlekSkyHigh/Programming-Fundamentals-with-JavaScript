// Write a program, which receives two string arrays containing number representations, and prints on the console whether they are identical.
// Arrays are identical if their elements at same indexes are equal. If they are identical, find the sum of the first array and print the following message: 
// `Arrays are identical. Sum: {sum}`
//  If the arrays are NOT identical, find the first index where the arrays differ and print the following message:
//  `Arrays are not identical. Found difference at {index} index`

function equalArrays(first, second) {

    let sum = 0;

    for (let i = 0; i < first.length; i++) {

        first[i] = Number(first[i]);
    };

    for (let i = 0; i < second.length; i++) {

        second[i] = Number(second[i]);
    };

    for (let i = 0; i < first.length; i++) {

        if (first[i] !== second[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        } else {
            sum += first[i];
        }
    };
    console.log(`Arrays are identical. Sum: ${sum}`);

}
equalArrays(['10', '20', '30'], ['10', '20', '30'])
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
equalArrays(['1'], ['10'])
