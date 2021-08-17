function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let priceCloths = Number(input[2]);
    let sumDecor = budget * 0.10;
    let sumClothes = statists * priceCloths;
    if (statists >= 150) {
        sumClothes = sumClothes * 0.90;
    } else {
        sumClothes = sumClothes;
    } 
    let totalSum = sumDecor + sumClothes;
    if (totalSum > budget) {
        console.log(`Not enough money!`);
        moneyLess = totalSum - budget;
        console.log(`Wingard needs ${moneyLess.toFixed(2)} leva more.`);
    } else if (totalSum <= budget) {
        console.log(`Action!`);
        moneyMore = budget - totalSum;
        console.log(`Wingard starts filming with ${moneyMore.toFixed(2)} leva left.`);
    }
}
//Сума за декор: 10% от 20000 = 2000 лв.
//Сума за облекло: 120 * 55.5 = 6660 лв.
//Обща сума за филма: 2000 + 6660 = 8660 лв.
//20000 – 8660 = 11340 лева остават.

//godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
//godzillaVsKong(["9587.88", "222", "55.68"]);
