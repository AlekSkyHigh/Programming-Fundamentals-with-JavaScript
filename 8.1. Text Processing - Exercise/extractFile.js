// Write a function that receives a single string - the path to a file (the '\' character is escaped)
// Your task is to subtract the file name and its extension. 
// (Beware of files like template.bak.pptx, as template.bak should be the file name, while pptx is the extension).

function extractFile(string) {

    let splitedInput = string.split("\\");
    let file = splitedInput.pop();

    let lastDot = file.lastIndexOf('.');
    let name = file.substring(0, lastDot);
    let extension = file.substring(lastDot + 1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx')
