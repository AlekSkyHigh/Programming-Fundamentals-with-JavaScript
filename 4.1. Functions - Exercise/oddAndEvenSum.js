// You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number. 

function oddAndEvenSum(number) {

    let numToString = number.toString();
    let numToStringLength = numToString.length;
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numToStringLength; i++) {

        let currentNum = Number(numToString[i]);

        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)
