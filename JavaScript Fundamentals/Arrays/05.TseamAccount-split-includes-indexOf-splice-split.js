function tseamAccount(input) {
    let games = input[0].split(' ');
 
    for (let i = 1; i < input.length; i++) {
        let currentEl = input[i].split(' ');
        let command = currentEl[0];
        let newGame = currentEl[1];
 
        if (command === 'Play') {
            break;
        } else if (command === "Install" && games.includes(newGame) === false) { // в списъка games има ли я newGame , ако не я добави
            games.push(newGame);
        } else if (command === 'Uninstall' && games.includes(newGame)) { / има ли я , ако да я изтрий.
            let index = games.indexOf(newGame); // намираме на кой индекс е тази игра
            games.splice(index, 1); //изтрий на индекса, една позиция
        } else if (command === 'Update' && games.includes(newGame)) { // ако я има.
            let index = games.indexOf(newGame); // намираме индекса, на който е.
            games.splice(index, 1); // изтриваме я
            games.push(newGame);// добавяме я отзад.
        } else if (command === 'Expansion') {
            let expansion = newGame.split('-');
            let game = expansion[0];
 
            if (games.includes(game)) {
                let expandedGame = expansion.join(':');
                let index = games.indexOf(game);
                games.splice(index + 1, 0, expandedGame); // не трием нищо. добаваме го.
            }
        }
    }
 
    console.log(games.join(' '));
}

tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']);


function tseamAccount1(input) {
    let games = input[0].split(' ');
 
    for (let i = 1; i < input.length; i++) {
        let currentEl = input[i].split(' ');
        let command = currentEl[0];
        let newGame = currentEl[1];
 
        if (command === 'Play') {
            break;
 
        } else if (command === "Install") {
            let counter = 0;
 
            for (let i = 0; i < games.length; i++) {
                if (games[i] === newGame) {
                    counter++;
                    break;
                }
            }
 
            if (counter === 0) {
                games.push(newGame);
            }
        } else if (command === 'Uninstall') {
            for (let i = 0; i < games.length; i++) {
                if (games[i] === newGame) {
                    games.splice(i, 1);
                    break;
                }
            }
        } else if (command === 'Update') {
            for (let i = 0; i < games.length; i++) {
                if (games[i] === newGame) {
                    games.splice(i, 1);
                    games.push(newGame);
                }
            }
        } else if (command === 'Expansion') {
            let expansion = newGame.split('-');
            let game = expansion[0];
 
            for (let i = 0; i < games.length; i++) {
                if (games[i] === game) {
                    let expandedGame = expansion.join(':');
                    games.splice(i + 1, 0, expandedGame);
                    break;
                }
            }
        }
    }
 
    console.log(games.join(' '));
}