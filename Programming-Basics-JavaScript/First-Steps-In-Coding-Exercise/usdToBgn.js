function convertUsdToBgn(input) {
    let usd = Number(input[0]);
    let bgn = usd * 1.79549;
    console.log(bgn);
}
convertUsdToBgn(["22"]);
convertUsdToBgn(["100"]);
convertUsdToBgn(["12.5"]);