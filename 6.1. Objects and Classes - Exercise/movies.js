// Write a function that stores information about movies inside an array. The movie's object info must be name, director, and date. You can receive several types of input:
// •	"addMovie {movie name}" – add the movie
// •	"{movie name} directedBy {director}" – check if the movie exists and then add the director
// •	"{movie name} onDate {date}" – check if the movie exists and then add the date
// At the end print all the movies that have all the info (if the movie has no director, name, or date, don’t print it) in JSON format.

function movies(inputArray) {

    let movies = [];

    for (let line of inputArray) {

        if (line.includes("addMovie ")) {
            let name = line.split("addMovie ")[1];
            movies.push({ name })

        } else if (line.includes(" directedBy ")) {
            let [name, director] = line.split(" directedBy ");
            let aMovie = movies.find(el => el.name === name); //a check if the movie already exists in the object
            if (aMovie) {
                aMovie.director = director;
            }

        } else if (line.includes("onDate")) {
            let [name, date] = line.split(" onDate ");
            let aMovie = movies.find(el => el.name === name);
            if (aMovie) {
                aMovie.date = date;
            }
        }

    }

    movies.forEach(aMovie => {
        if (aMovie.name && aMovie.director && aMovie.date) {
            console.log(JSON.stringify(aMovie));
        }

    })

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
])
