function worldSnookerChampionship(input) {
    let etap = input[0];
    let typeBilet = input[1];
    let countBileti = Number(input[2]);
    let photo = input[3];
    let price = 0;
    let totalPrice = 0;
    let flag = true; // ще плащам ли снимки, ако искам? - да.
    switch (etap) {
        case "Quarter final":
            switch (typeBilet) {
                case "Standard":
                    price = countBileti * 55.50;
                    break;
                case "Premium":
                    price = countBileti * 105.20;
                    break;
                case "VIP":
                    price = countBileti * 118.90;
                    break;
            }
            break;
        case "Semi final":
            switch (typeBilet) {
                case "Standard":
                    price = countBileti * 75.88;
                    break;
                case "Premium":
                    price = countBileti * 125.22;
                    break;
                case "VIP":
                    price = countBileti * 300.40;
                    break;
            }
            break;
        case "Final":
            switch (typeBilet) {
                case "Standard":
                    price = countBileti * 110.10;
                    break;
                case "Premium":
                    price = countBileti * 160.66;
                    break;
                case "VIP":
                    price = countBileti * 400;
                    break;
                }
                break;
    }
    if (price > 4000) {
        price *= 0.75;
        flag = false; // без допълнително заплащане на снимки NO
    } else if (price > 2500) {
        price *= 0.90;
    }
    if (photo == "Y" && flag) { // тру - с допълнително запл. на снимки.
        totalPrice = price + (countBileti * 40);
    } else {
        totalPrice = price;
    }
    console.log(totalPrice.toFixed(2));
}

//worldSnookerChampionship(["Final", "Premium", "25", "Y"]);
//worldSnookerChampionship(["Semi final","VIP","9","Y"])
worldSnookerChampionship(["Quarter final","Standard","11","N"]);