function FamilyTrip(input) {
    let budget = Number(input[0]);
    let countNight = Number(input[1]);
    let priceNight = Number(input[2]);
    let procentAddExpenses = Number(input[3]);
    let totalNightPrice = 0;
    if (countNight > 7) {
        totalNightPrice = countNight * (priceNight * 0.95);
    } else {
        totalNightPrice = countNight * priceNight;
    } 
    let addExpenses = (procentAddExpenses / 100) * budget;
    let totalMoney = totalNightPrice + addExpenses;
    if (totalMoney <= budget) {
        let moreMoney = budget - totalMoney;
        console.log(`Ivanovi will be left with ${moreMoney.toFixed(2)} leva after vacation.`);
    } else if (totalMoney > budget) {
        let lessMoney = totalMoney - budget;
        console.log(`${lessMoney.toFixed(2)} leva needed.`);
    }
}

FamilyTrip(["800.50", "8", "100", "2"]);
FamilyTrip(["500", "7", "66", "15"]);