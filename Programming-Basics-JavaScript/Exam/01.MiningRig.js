function miningRig(input) {
    let priceVideoCard = Number(input[0]);
    let pricePrehodnik = Number(input[1]);
    let priceTok = Number(input[2]);
    let winDay = Number(input[3]);

    let totalCards = priceVideoCard * 13;
    let totalPrehodnik = pricePrehodnik * 13;
    let totalMoney = totalCards + totalPrehodnik + 1000;
    let winCardDay = winDay - priceTok;
    let totalWinCardDay = 13 * winCardDay;
    let daysNeed = totalMoney / totalWinCardDay;

    console.log(totalMoney);
    console.log(Math.ceil(daysNeed));
}

miningRig(["700",
"15",
"0.20",
"2"])