// Write a JavaScript function to match full names from a list of names and print them on the console.

function matchFullName(string) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/gm;

    let result = string.match(pattern);

    console.log(result.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")
