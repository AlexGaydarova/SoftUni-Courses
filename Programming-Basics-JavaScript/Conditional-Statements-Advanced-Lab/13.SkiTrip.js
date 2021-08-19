function skiTrip(input) {
    let days = Number(input[0]);
    let typeRoom = input[1];
    let opinion = input[2];
    let nights = days - 1;
    let priceForRoom = 0;
    switch (typeRoom) {
        case "room for one person":
                priceForRoom = nights * 18.00;
            break;
        case "apartment":
            if (days < 10){
                priceForRoom = 0.70 * (nights * 25.00);
            } else if (days < 15) {
                priceForRoom = 0.65 * (nights * 25.00);
            } else {
                priceForRoom = 0.50 * (nights * 25.00);
            }
            break;
        case "president apartment":
            if (days < 10){
                priceForRoom = 0.90 * (nights * 35.00);
            } else if (days < 15) {
                priceForRoom = 0.75 * (nights * 35.00);
            } else {
                priceForRoom = 0.80 * (nights * 35.00);
            }
            break;
    }
    if (opinion == "positive") {
        priceForRoom = priceForRoom * 1.25;
    } else if (opinion == "negative") {
        priceForRoom = priceForRoom * 0.90;
    }
    console.log(priceForRoom.toFixed(2));
}

//skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"])