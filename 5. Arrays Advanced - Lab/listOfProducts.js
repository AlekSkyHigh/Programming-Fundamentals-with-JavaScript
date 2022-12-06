// You will receive an array of products. Print a numbered array of all the products ordered by name.

function listOfProducts(arr) {

    let sortedProducts = arr.sort();
    let sortedProductsLength = sortedProducts.length;

    for (let i = 0; i < sortedProductsLength; i++) {

        console.log(`${i + 1}.${sortedProducts[i]}`);
    }

}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
listOfProducts(['Watermelon', 'Banana', 'Apples'])
