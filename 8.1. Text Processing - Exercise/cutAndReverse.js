// The input will be a single string.
// Write a function that cuts the given string into half and reverse the two halves.
// Print each half on a separate line.

function cutAndReverse(string) {

    const middle = string.length / 2;

    const firstPart = string
        .substring(0, middle)
        .split('')
        .reverse()
        .join('');

    const secondPart = string
        .substring(middle)
        .split('')
        .reverse()
        .join('');

    console.log(firstPart);
    console.log(secondPart);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')

cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')
