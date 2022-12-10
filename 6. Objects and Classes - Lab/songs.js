// Define a class Song, which holds the following information about songs: typeList, name, and time.
// You will receive the input as an array.
// The first element n will be the number of songs. Next n elements will be the songs data in the following format: "{typeList}_{name}_{time}", and the last element will be typeList / "all".
// Print only the names of the songs, which have the same typeList (obtained as the last parameter). If the value of the last element is "all", print the names of all the songs.

function songs(inputArray) {

    let numberOfSongs = inputArray.shift();
    let requiredTypeList = inputArray.pop();

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

    }

    for (let songData of inputArray) {

        let splitedData = songData.split("_");
        let typeList = splitedData[0];
        let name = splitedData[1];
        let time = splitedData[2];

        let song = new Song(typeList, name, time);

        if (requiredTypeList === typeList) {
            console.log(name);
        } else if (requiredTypeList === "all") {
            console.log(name);
        }

    }

}
songs([
    3,  // number of songs
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite' //typeList
])

songs([
    4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'
])

// songs([
//     2,
//     'like_Replay_3:15',
//     'ban_Photoshop_3:48',
//     'all'
// ])
