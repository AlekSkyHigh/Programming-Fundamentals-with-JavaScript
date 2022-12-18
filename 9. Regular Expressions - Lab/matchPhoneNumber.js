// A valid number has the following characteristics:
// •	It starts with "+359"
// •	Then, it is followed by the area code (always 2)
// •	After that, it’s followed by the number itself:
// o	The number consists of 7 digits (separated into two groups of 3 and 4 digits respectively). 
// •	The different parts are separated by either a space or a hyphen ('-').
// You can use the following RegEx properties to help with the matching: 
// •	Use quantifiers to match a specific number of digits
// •	Use a capturing group to make sure the delimiter is only one of the allowed characters (space or hyphen) and not a combination of both (e.g. +359 2-111 111 has mixed delimiters, it is invalid). Use a group backreference to achieve this.
// •	Add a word boundary at the end of the match to avoid partial matches (the last example on the right-hand side).
// •	Ensure that before the '+' sign there is either a space or the beginning of the string.

function matchPhoneNumber(input) {

    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/gm;

    let string = input.shift();

    let result = string.match(pattern);

    console.log(result.join(', '));
}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])

matchPhoneNumber(['+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222'])
