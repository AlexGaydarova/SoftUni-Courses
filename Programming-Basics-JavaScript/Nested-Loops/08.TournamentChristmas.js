function tournamentOfChristmas(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let money = 0;
    let winCounter = 0;
    let loseCounter = 0; // za denq
    for (let i = 0; i < days; i++) {
        let comand = input[index];
        index++;
        let tempMoney = 0;
        let tempWinCounter = 0;
        let tempLoseCounter = 0;
        while (comand !== "Finish") {
            let sport = comand;
            let result = input[index];
            index++;
            if (result === "win") {
                tempMoney += 20;
                tempWinCounter++;
            } else {
                tempLoseCounter++;
            }
            comand = input[index];
            index++;
        }
        if (tempWinCounter > tempLoseCounter) {
            tempMoney *= 1.10;
            winCounter++;
        } else {
            loseCounter++;
        }
        money += tempMoney;
    }
    if (winCounter > loseCounter) {
        money *= 1.20;
        console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`);
    }
}
