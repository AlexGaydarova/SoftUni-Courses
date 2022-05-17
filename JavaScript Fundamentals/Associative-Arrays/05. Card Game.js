function cardGame(input) {
    let symbolToPoints = {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, 
    '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14, 'S': 4, 
    'H': 3, 'D': 2,'C': 1,};
    let players = {};
    let result = {};

    for (let command of input) {
        let tokens = command.split(': ');
        let playerName = tokens[0];
        let playerCards = tokens[1].split(', ');

        if (!players.hasOwnProperty(playerName)) {
            players[playerName] = [];
        }
        players[playerName] = players[playerName].concat(playerCards);
    }
    //calculate points
    for (let [playerName, playerCards] of Object.entries(players)) {
    result[playerName] = 0;

    for (let i = 0; i < playerCards.length; i++) {
        let card = playerCards[i];
        if(playerCards.indexOf(card) === i) { // ако се среща за първи път картата, НЕ СЕ ПОВТАРЯ
            let cardAsArray = card.split(''); // array [1, 0, 'H']
            let type = cardAsArray.pop(); 'H'
            let power = cardAsArray.join(''); '10'
    
            let cardPoints = symbolToPoints[power] * symbolToPoints[type];
    
            result[playerName] += cardPoints;
        }
      }
   }
   //print
   for (let [key,value] of Object.entries(result)) {
       console.log(`${key}: ${value}`);
   }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]);



    