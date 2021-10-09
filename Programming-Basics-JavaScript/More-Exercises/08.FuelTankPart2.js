function fuelTank2(input) {
    let typeGorivo = input[0];
    let countGorivo = Number(input[1]);
    let clubCard = input[2];
    let price = 0;
switch (typeGorivo) {
    case "Gasoline":
        switch (clubCard) {
            case "Yes":
                price = countGorivo * (2.22 - 0.18);
                break;
            case "No":
                price = countGorivo * 2.22;
                break;
        }
        break;
    case "Diesel":
        switch (clubCard) {
            case "Yes":
                price = countGorivo * (2.33 - 0.12);
                break;
            case "No":
                price = countGorivo * 2.33;
                break;
        }
        break;
    case "Gas":
        switch (clubCard) {
            case "Yes":
                price = countGorivo * (0.93 - 0.08);
                break;
            case "No":
                price = countGorivo * 0.93;
                break;
        }
        break;
}
if  (countGorivo < 20) {
    price = price;
} else if (countGorivo <= 25) {
    price *= 0.92;
} else {
    price *= 0.90;
}
console.log(`${price.toFixed(2)} lv.`);
}

fuelTank2(["Gas", "30", "Yes"]);