// Write a program, which receives an array of strings. Your task is to reverse the array without creating a new array. 
// Print the resulting elements on a single line, space-separated. 

function reverseInPlace(arr) {

    for (let i = 0; i < arr.length / 2; i++) {

        let oldElement = arr[i];
        let previousIndex = arr.length - 1 - i;

        arr[i] = arr[previousIndex];
        arr[previousIndex] = oldElement;
    }
  
    console.log(arr.join(' '));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])
reverseInPlace(['33', '123', '0', 'dd'])
