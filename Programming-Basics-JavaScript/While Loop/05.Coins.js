function coins(input) {
    let moneyInLv = Number(input[0]);
    let moneyInCoins = Math.floor(moneyInLv * 100); // превръщаме ги в монети.
    let counter = 0; //ще брои върнатите монети.
    while (moneyInCoins > 0){
        if (moneyInCoins >= 200) {
            moneyInCoins -= 200;
            counter++
        } else if (moneyInCoins >= 100) {
            moneyInCoins -= 100;
            counter++;
        } else if (moneyInCoins >= 50) {
            moneyInCoins -= 50;
            counter++;
        } else if (moneyInCoins >= 20) {
            moneyInCoins -= 20;
            counter++;
        } else if (moneyInCoins >= 10) {
            moneyInCoins -= 10;
            counter++;
        } else if (moneyInCoins >= 5) {
            moneyInCoins -= 5;
            counter++;
        } else if (moneyInCoins >= 2) {
            moneyInCoins -= 2;
            counter++;
        } else if (moneyInCoins >= 1) {
            moneyInCoins -= 1;
            counter++;
        }
    }
    console.log(counter)
}