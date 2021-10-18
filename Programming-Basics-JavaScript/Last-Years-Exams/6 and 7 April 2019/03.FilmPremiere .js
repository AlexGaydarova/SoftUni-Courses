function filmPremiere(input) {
    let movieName = input[0];
    let package = input[1];
    let countBileti = Number(input[2]);
    let price = 0;
    switch (movieName) {
        case "John Wick":
            switch (package) {
                case "Drink":
                    price = countBileti * 12;
                    break;
                case "Popcorn":
                    price = countBileti * 15;
                    break;
                case "Menu":
                    price = countBileti * 19;
                    break;
            }
            break;
        case "Star Wars":
            switch (package) {
                case "Drink":
                    price = countBileti * 18;
                    break;
                case "Popcorn":
                    price = countBileti * 25;
                    break;
                case "Menu":
                    price = countBileti * 30;
                    break;
            }
            break;
            case "Jumanji":
                switch (package) {
                    case "Drink":
                        price = countBileti * 9;
                        break;
                    case "Popcorn":
                        price = countBileti * 11;
                        break;
                    case "Menu":
                        price = countBileti * 14;
                        break;
                }
                break;

    }
    if (movieName == "Star Wars" && countBileti >= 4) {
        price *= 0.70;
    }
    if  (movieName == "Jumanji" && countBileti == 2) {
        price *= 0.85;
    }
    console.log(`Your bill is ${price.toFixed(2)} leva.`)
}

filmPremiere(["Jumanji",
"Menu",
"2"]);