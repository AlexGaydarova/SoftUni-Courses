function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let type;
    let clas;
    let priceCar;
    if (budget <= 100) {
        clas = "Economy class";
        if (season == "Summer") {
            type = "Cabrio";
            priceCar = 0.35 * budget;
        } else if (season == "Winter") {
            type = "Jeep";
            priceCar = 0.65 * budget;
        }
    } else if (budget > 100 && budget <= 500) {
        clas = "Compact class";
        if (season == "Summer") {
            type = "Cabrio";
            priceCar = 0.45 * budget;
        } else if (season == "Winter") {
            type = "Jeep";
            priceCar = 0.80 * budget;
        }
    } else if (budget > 500) {
        clas = "Luxury class";
        if (season == "Summer" || season == "Winter") {
            type = "Jeep";
            priceCar = 0.90 * budget;        
        }
    }
    console.log(`${clas}`);
    console.log(`${type} - ${priceCar.toFixed(2)}`);
}

//carToGo(["450", "Summer"]);
//carToGo(["450", "Winter"]);
carToGo(["1010", "Winter"]);