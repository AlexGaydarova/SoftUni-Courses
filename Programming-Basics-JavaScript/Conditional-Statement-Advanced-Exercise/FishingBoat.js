function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let countPeople = Number(input[2]);
    let priceBoat = 0;
    //"Spring", "Summer", "Autumn", "Winter"
    if (season == "Spring") {
        priceBoat = 3000;
    } else if (season == "Summer" || season == "Autumn") {
        priceBoat = 4200; 
    } else if (season == "Winter") {
        priceBoat = 2600;
    }
    if (countPeople <= 6) {
        priceBoat = priceBoat * 0.90;
    } else if (countPeople <= 11) {
        priceBoat = priceBoat * 0.85;
    } else if (countPeople > 12) {
        priceBoat = priceBoat * 0.75;
    }
    if (countPeople % 2 == 0 && season != "Autumn") {
        priceBoat = priceBoat * 0.95;
    }
    if (budget >= priceBoat) {
        diff = budget - priceBoat;
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        diff = priceBoat - budget;
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
fishingBoat(["3000","Summer","11"]);
fishingBoat(["2000","Winter","13"]);
