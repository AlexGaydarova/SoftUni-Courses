function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination;
    let type;
    let totalSum = 0;
    //Bulgaria", "Balkans" и "Europe
    //"summer" или "winter"
    if (budget <= 100) {
        if (season == "summer") {
            totalSum = 0.30 * budget;
            type = "Camp";
            destination = "Bulgaria";
        } else if (season == "winter") {
            totalSum = 0.70 * budget;
            type = "Hotel";
            destination = "Bulgaria";
        }
    } else if (budget <= 1000 ) {
        if (season == "summer") {
            totalSum = 0.40 * budget;
            type = "Camp";
            destination = "Balkans";
        } else if ( season == "winter") {
            totalSum = 0.80 * budget;
            type = "Hotel";
            destination = "Balkans";
        }
    } else if (budget > 1000) {
        destination = "Europe"
        totalSum = 0.90 * budget;
        type = "Hotel";
        }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${totalSum.toFixed(2)}`);
}


journey(["50", "summer"]);
journey(["678.53", "winter"]);
