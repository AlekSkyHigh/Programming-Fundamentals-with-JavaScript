// For this problem, you have to write a function, which generates a password depending on input information. As such, you will be given an array of three strings. The first two strings will be at least 10 characters long, the third one will be one word.
// Your task here is to concatenate the first two strings and replace all vowels in the concatenated string with symbols from the third string. The first vowel must be replaced with the first character from the third string, the second vowel with the second character from that string, and so on. If the third string is less than the vowels count in the newly formed string you need to start over with the character on the 0 index. 
// When you replace all vowels reverse the new password and print it on the console in a format: 'Your generated password is {password}'
// Note: All replaced vowels with the characters from the third string must be upper-case, the rest of the characters are lower-case.

function passwordGenerator(array) {

    let password = (array[0] + array[1]).toLocaleLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let key = array[2].toLocaleUpperCase();
    let currentKeyIndex = 0;

    for (let char of password) {
        if (vowels.includes(char)) {
            password = password.replace(char, key[currentKeyIndex++]);
            if (key[currentKeyIndex] === undefined) {
                currentKeyIndex = 0;
            }
        }
    };

    let newPassword = password.split('').reverse().join('');
    console.log(`Your generated password is ${newPassword}`);

}
passwordGenerator([
    'ilovepizza',
    'ihatevegetables',
    'orange'
])

passwordGenerator([
    'easymoneyeazylife',
    'atleasttencharacters',
    'absolute'
])

passwordGenerator([
    'areyousureaboutthisone',
    'notquitebutitrustyou',
    'disturbed'
])
