function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let location;
    let place;
    let price;
    if (budget <= 1000) {
        place = "Camp";
        if (season == "Summer") {
            location = "Alaska";
            price = 0.65 * budget;
        } else if ( season == "Winter") {
            location = "Morocco";
            price = 0.45 * budget;
        }
    } else if (budget <= 3000){
        place = "Hut";
        if (season == "Summer") {
            location = "Alaska";
            price = 0.80 * budget;
        } else if ( season == "Winter") {
            location = "Morocco";
            price = 0.60 * budget;
        }
    } else if (budget > 3000) {
        place = "Hotel";
        if (season == "Summer") {
            location = "Alaska";
            price = 0.90 * budget;
        } else if ( season == "Winter") {
            location = "Morocco";
            price = 0.90 * budget;
        }
    }
    console.log(`${location} - ${place} - ${price.toFixed(2)}`);
}

vacation(["800", "Summer"]);

