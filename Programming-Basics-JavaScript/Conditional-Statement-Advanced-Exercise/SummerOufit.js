function summerOutfit(input) {
    let degrees = Number(input[0]);
    let timeOfDay = input[1];
    let Outfit;
    let Shoes;
    if (timeOfDay == "Morning") {
        if (degrees >= 10 && degrees <= 18) {
            Outfit = "Sweatshirt";
            Shoes = "Sneakers";
        } else if ( degrees <= 24) {
            Outfit = "Shirt";
            Shoes = "Moccasins";
        } else if ( degrees >= 25) {
            Outfit = "T-Shirt";
            Shoes = "Sandals";
        }
    }
    if (timeOfDay == "Afternoon") {
        if (degrees >= 10 && degrees <= 18) {
            Outfit = "Shirt";
            Shoes = "Moccasins";
        } else if (degrees <= 24) {
            Outfit = "T-Shirt";
            Shoes = "Sandals";
        } else if (degrees >= 25) {
            Outfit = "Swim Suit";
            Shoes = "Barefoot";
        }
    }
    if (timeOfDay == "Evening") {
        if (degrees >= 10 && degrees <= 18) {
            Outfit = "Shirt";
            Shoes = "Moccasins";
        } else if (degrees <= 24) {
            Outfit = "Shirt";
            Shoes = "Moccasins";
        } else if (degrees >= 25) {
            Outfit = "Shirt";
            Shoes = "Moccasins";
        }
    }
    console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`);
}

summerOutfit(["16", "Morning"]);
summerOutfit(["22","Afternoon"]);
summerOutfit(["28","Evening"]);