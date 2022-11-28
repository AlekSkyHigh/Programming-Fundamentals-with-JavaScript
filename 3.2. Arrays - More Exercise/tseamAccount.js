// As a gamer, Peter has Tseam Account. He loves to buy new games. You are given Peter's account with all of his games-> strings, separated by space. Until you receive "Play!" you will be receiving commands which Peter does with his account.
// You may receive the following commands:
// •	Install {game} - add the game at the last position in the account, but only if it isn't installed already.
// •	Uninstall {game} - delete the game if it exists.
// •	Update {game} - update the game if it exists and place it in the last position.
// •	Expansion {game}-{expansion} - check if the game exists and insert after it the expansion in the following format: "{game}:{expansion}";

function tseamAccount(inputArr) {

    let installedGames = inputArr[0].split(' '); inputArr.shift();

    let index = 0;
    let command = inputArr[index].split(' ');
    index++;

    let action = command[0];
    let game = command[1];

    while (action !== "Play!") {

        switch (action) {
            case "Install":
                if (!installedGames.includes(game)) {
                    installedGames.push(game);
                }
                break;

            case "Uninstall":
                installedGames = installedGames.filter(el => el !== game);
                break;

            case "Update":
                if (installedGames.includes(game)) {
                    installedGames = installedGames.filter(elm => elm !== game);
                    installedGames.push(game);
                }
                break;

            case "Expansion": game = game.split('-')
                if (installedGames.includes(game[0])) {
                    let i = installedGames.indexOf(game[0]);
                    installedGames.splice(i + 1, 0, `${game[0]}:${game[1]}`);
                }
                break;

        }

        command = inputArr[index].split(' ');
        index++;
        action = command[0];
        game = command[1];

    }
    console.log(installedGames.join(' '));
}
tseamAccount([
    'CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
])

tseamAccount(['CS WoW Diablo',

    'Uninstall XCOM',

    'Update PeshoGame',

    'Update WoW',

    'Expansion Civ-V',

    'Play!'])
