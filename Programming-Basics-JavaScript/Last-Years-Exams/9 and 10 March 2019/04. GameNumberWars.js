function gameNumberWars(input) {
    let player1 = input[0];
    let player2 = input[1];
    let index = 2;
    let player1Points = 0;
    let player2Points = 0;
    while (true) {
        if (input[index] == "End of game") {
            console.log(`${player1} has ${player1Points} points`);
            console.log(`${player2} has ${player2Points} points`);
            break;
        }
    let cardPlayer1 = Number(input[index]);
    index++;
    let cardPlayer2 = Number(input[index]);
    index++;
    if (cardPlayer1 > cardPlayer2) {
        player1Points += cardPlayer1 - cardPlayer2;
    } else if (cardPlayer2 > cardPlayer1) {
        player2Points += cardPlayer2 - cardPlayer1;
    } else if (cardPlayer1 == cardPlayer2) {
        console.log(`Number wars!`);
        let cardPlayer1 = Number(input[index]);
        index++;
        let cardPlayer2 = Number(input[index]);
        index++;
        if (cardPlayer1 > cardPlayer2) {
            console.log(`${player1} is winner with ${player1Points} points`);
        } else {
            console.log(`${player2} is winner with ${player2Points} points`);
        }
        break;
    }
  }
}

//gameNumberWars(["Desi","Niki","7","5","3","4","3","3","5","3"]);
//gameNumberWars(["Elena","Simeon","6","3","2","5","8","9","End of game"]);
gameNumberWars(["Aleks","Georgi","4","5","3","2","4","3","4","4","5","2"]);