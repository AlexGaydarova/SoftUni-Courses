function cleverLily(input) {
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toyCount = 0;
    let moneyCount = 0;
    let currentMoneyPresent = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            currentMoneyPresent += 10;
            moneyCount = moneyCount + currentMoneyPresent;
            moneyCount--;
        } else {
            toyCount++;
        }
    }
    moneyCount += toyCount * toyPrice;

    if (moneyCount >= washerPrice) {
        console.log(`Yes! ${(moneyCount - washerPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washerPrice - moneyCount).toFixed(2)}`);
    }
}

cleverLily(["10", "170", "6"]);
//cleverLily(["21", "1570.98", "3"]);