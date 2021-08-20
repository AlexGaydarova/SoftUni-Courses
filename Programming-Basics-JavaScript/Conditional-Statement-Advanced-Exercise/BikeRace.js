function bikeRace(input) {
    let countJuniors = Number(input[0]);
    let countSeniors = Number(input[1]);
    let typeTrace = input[2];
    let taxJuniors = 0;
    let taxSeniors = 0;
    let totalTax = 0;
    let totalCount = countJuniors + countSeniors;
    switch (typeTrace) {
        case "trail":
            taxJuniors = countJuniors * 5.50;
            taxSeniors = countSeniors * 7;
            break;
        case "cross-country":
            taxJuniors = countJuniors * 8;
            taxSeniors = countSeniors * 9.50;
            break;
        case "downhill":
            taxJuniors = countJuniors * 12.25;
            taxSeniors = countSeniors * 13.75;
            break;
        case "road":
            taxJuniors = countJuniors * 20.00;
            taxSeniors = countSeniors * 21.50;
            break;
    }
        totalTax = taxJuniors + taxSeniors;
    if (totalCount >= 50 && typeTrace === "cross-country") {
        totalTax = totalTax * 0.75;
    } else {
        totalTax = totalTax;
    }
    finalTax = totalTax * 0.95;
    console.log(finalTax.toFixed(2));
}

bikeRace(["10", "20", "trail"]);
bikeRace(["30", "25", "cross-country"]);
