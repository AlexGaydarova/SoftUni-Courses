function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let count = Number(input[2]);
    let totalPrice = 0;
    switch (product) {
        case "coffee":
            switch (town) {
                case "Sofia":
                    totalPrice = count * 0.5;
                    break;
                case "Plovdiv":
                    totalPrice = count * 0.4;
                    break;
                case "Varna":
                    totalPrice = count * 0.45;
                    break;
            }
        break;
        case "water":
            switch (town) {
                case "Sofia":
                    totalPrice = count * 0.8;
                    break;
                case "Plovdiv":
                case "Varna":
                    totalPrice = count * 0.7;
                    break;
            }
        break;
        case "beer":
            switch (town) {
                case "Sofia":
                    totalPrice = count * 1.2;
                    break;
                case "Plovdiv":
                    totalPrice = count * 1.15;
                    break;
                case "Varna":
                    totalPrice = count * 1.10;
                    break;
            }
        break;
        case "sweets":
            switch (town) {
                case "Sofia":
                    totalPrice = count * 1.45;
                    break;
                case"Plovdiv":
                    totalPrice = count * 1.3;
                    break;
                case "Varna":
                    totalPrice = count * 1.35;
                    break;
            }
        break;
        case "peanuts":
            switch (town) {
                case "Sofia":
                    totalPrice = count * 1.60;
                    break;
                case "Plovdiv":
                    totalPrice = count * 1.5;
                    break;
                case "Varna":
                    totalPrice = count * 1.55;
            }
        break;
    }
    console.log(totalPrice);
}

smallShop(["coffee", "Varna", "2"]);
smallShop(["peanuts","Plovdiv","1"]);
smallShop(["beer","Sofia","6"]);