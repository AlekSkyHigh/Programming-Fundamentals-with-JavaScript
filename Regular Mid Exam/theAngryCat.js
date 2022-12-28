// Solve 1 of 3:
function theAngryCat(input, entrypoint, itemType) {

    let leftDamage = 0;
    let rightDamage = 0;

    for (let index = 0; index < input.length; index++) {

        if (index < entrypoint) { //left check

            if ((input[index] < input[entrypoint] && itemType === 'cheap') || (input[index] >= input[entrypoint] && itemType === "expensive")) {
                leftDamage += input[index]
            } else {
                leftDamage += 0;
            }

        } else if (index > entrypoint) { //right check

            if ((input[index] < input[entrypoint] && itemType === 'cheap') || (input[index] >= input[entrypoint] && itemType === "expensive")) {
                rightDamage += input[index]
            } else {
                rightDamage += 0;
            }
        }

    }

    let position = 0;
    let damage = 0;

    if (leftDamage >= rightDamage) {
        position = 'Left';
        damage = leftDamage;
    } else {
        position = 'Right';
        damage = rightDamage;
    }

    console.log(`${position} - ${damage}`);

}
theAngryCat([1, 5, 1], 1, "cheap")
theAngryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");


// Solve 2 of 3:
function angryCat(input, entryPoint, itemType) {

    let leftDamage = 0;
    let rightDamage = 0;

    for (let i = 0; i < input.length; i++) {
        if (i < entryPoint) {
            leftDamage += breakItemAndCalculate(input[i], input[entryPoint], itemType);
        } else if (i > entryPoint) {
            rightDamage += breakItemAndCalculate(input[i], input[entryPoint], itemType);
        }
    }

    function breakItemAndCalculate(priceRate, entryPoint, itemType) {
        if ((priceRate < entryPoint && itemType === 'cheap') || (priceRate >= entryPoint && itemType === 'expensive')) {
            return priceRate;
        }
        return 0;
    }

    let position = '', damage = 0;

    if (leftDamage >= rightDamage) {
        position = 'Left';
        damage = leftDamage;
    } else {
        position = 'Right';
        damage = rightDamage;
    }

    console.log(`${position} - ${damage}`);

}
angryCat([1, 5, 1], 1, "expensive");
// angryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
// angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");


// Solve 3 of 3:
function angryCat(input, entryPoint, itemType) {

    let leftDamage = 0;
    let rightDamage = 0;

    for (let left = 0; left < entryPoint; left++) {

        if ((input[left] < input[entryPoint] && itemType === 'cheap') || (input[left] >= input[entryPoint] && itemType === "expensive")) {
            leftDamage += input[left]
        } else {
            leftDamage += 0;
        }

    }

    for (let right = entryPoint + 1; right < input.length; right++) {

        if ((input[right] < input[entryPoint] && itemType === 'cheap') || (input[right] >= input[entryPoint] && itemType === "expensive")) {
            rightDamage += input[right]
        } else {
            rightDamage += 0;
        }

    }

    let position = 0;
    let damage = 0;

    if (leftDamage >= rightDamage) {
        position = 'Left';
        damage = leftDamage;
    } else {
        position = 'Right';
        damage = rightDamage;
    }

    console.log(`${position} - ${damage}`);

}
angryCat([1, 5, 1], 1, "cheap")
angryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");


