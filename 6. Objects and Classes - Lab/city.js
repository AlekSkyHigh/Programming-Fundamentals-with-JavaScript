// Write a function that receives a single parameter – an object, containing five properties:
// { name, area, population, country, postcode }
// Loop through all the keys and print them with their values in format: "{key} -> {value}"

//Solution 1 of 3:
function city(cityInfo) {

    let entries = Object.entries(cityInfo);

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }

}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})

city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})

//Time and memory used:
//Memory: 0.00 MB
//Time: 0.100 s


// Solution 2 of 3:
function city(cityInfo) {

    console.log(`name -> ${cityInfo.name}`);
    console.log(`area -> ${cityInfo.area}`);
    console.log(`population -> ${cityInfo.population}`);
    console.log(`country -> ${cityInfo.country}`);
    console.log(`postCode -> ${cityInfo.postCode}`);

}
city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})

//Time and memory used
//Memory: 0.00 MB
//Time: 0.160 s


// Solution 3 of 3:
function city(cityInfo) {

    for (let key of Object.keys(cityInfo)) {
        console.log(`${key} -> ${cityInfo[key]}`);
    }

}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})

//Time and memory Used:
//Memory: 8.48 MB
//Time: 0.234 s
