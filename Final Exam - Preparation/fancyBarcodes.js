function fancyBarcodes(inputArrayStrings) {

    let barcodesCount = Number(inputArrayStrings.shift());
    let pattern = /[@]{1}[#]{1,}([A-Z]{1}[A-Za-z0-9]{4,}[A-Z]{1})[@]{1}[#]{1,}/gm;

    for (let i = 0; i < barcodesCount; i++) {

        let currentBarcode = inputArrayStrings[i];
        let currentGroup = '';

        if (currentBarcode.match(pattern)) {

            for (let char of currentBarcode) {
                if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
                    currentGroup += char;
                }
            }

            if (currentGroup.length > 0) {
                console.log(`Product group: ${currentGroup}`);
            } else {
                console.log('Product group: 00');
            }

        } else {
            console.log(`Invalid barcode`);
        }
    }
}
fancyBarcodes([
    "3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
])

fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])

