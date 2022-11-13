// Write a function that receives a number M and a number N (M will always be bigger than N). Print all numbers from M to N.

function numbersFromMToN(m, n) {

    while (m >= n) {
        let currentNum = m
        m--;
        console.log(currentNum);
    }

}
numbersFromMToN(6, 2)
numbersFromMToN(4, 1)


//  Вариянт с For цикъл: 
//  for(let i = m; i >= n; i--){
//      console.log(i);
//  }
