function matchTickets(input) {
    let budget = Number(input[0]);
    let typeBileti = input[1];
    let countPeople = input[2];
    let budgetBileti = 0;
    let priceBileti = 0;
    let diff;
    if (countPeople <= 4) {
        budgetBileti = budget * 0.25;
    } else if (countPeople <= 9) {
        budgetBileti = budget * 0.40;
    } else  if (countPeople <= 24) {
        budgetBileti = budget * 0.50;
    } else if (countPeople <= 49) {
        budgetBileti = budget * 0.60;
    } else if (countPeople >= 50) {
        budgetBileti = budget * 0.75;
    }
    if (typeBileti === "Normal") {
        priceBileti = 249.99 * countPeople;
    } else if (typeBileti === "VIP"){
        priceBileti = 499.99 * countPeople;
    }
    if (priceBileti <= budgetBileti) {
        diff = budgetBileti - priceBileti;
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else  if (priceBileti > budgetBileti) {
        diff = priceBileti - budgetBileti;
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}

matchTickets(["1000", "Normal", "1"]);
matchTickets(["30000", "VIP", "49"]);