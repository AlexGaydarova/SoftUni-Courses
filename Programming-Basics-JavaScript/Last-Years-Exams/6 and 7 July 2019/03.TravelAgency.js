function travelAgency(input) {
    let city = input[0];
    let typePackage = input[1];
    let vipDiscount = input[2];
    let days = Number(input[3]);
    let price = 0;
    if (days < 1) {
        console.log(`Days must be positive number!`);
    } else {
    switch (city) {
        case "Bansko":
        case "Borovets":
            switch (typePackage) {
                case "noEquipment":
                    if (days > 7) {
                        price = 80 * (days - 1);
                    } else {
                        price = 80 * days;
                    }
                    if (vipDiscount == "yes") {
                        price *= 0.95;
                    } else if (vipDiscount == "no") {
                        price = price;
                    }
                    break;
                case "withEquipment":
                    if (days > 7) {
                        price = 100 * (days - 1);
                    } else {
                        price = 100 * days;
                    }
                    if (vipDiscount == "yes") {
                        price *= 0.90;
                    } else if (vipDiscount == "no") {
                        price = price;
                    }
                    break;
            }
            console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
            break;
        case "Varna":
        case "Burgas":
            switch (typePackage) {
                case "withBreakfast":
                    if (days > 7) {
                        price = 130 * (days - 1);
                    } else {
                        price = 130 * days;
                    }
                    if (vipDiscount == "yes") {
                        price *= 0.88;
                    } else if (vipDiscount == "no") {
                        price = price;
                    }
                    break;
                case "noBreakfast":
                    if (days > 7) {
                        price = 100 * (days - 1);
                    } else {
                        price = 100 * days;
                    }
                    if (vipDiscount == "yes") {
                        price *= 0.93;
                    } else if (vipDiscount == "no") {
                        price = price;
                    }
                    break;
            }
            console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
            break;
            default:
                console.log("Invalid input!");
                break;
    } 
  }
}