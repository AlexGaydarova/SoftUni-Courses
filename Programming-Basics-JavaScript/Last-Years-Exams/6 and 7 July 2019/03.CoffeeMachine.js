function coffeeMachine(input) {
    let drinks = input[0];
    let sugar = input[1];
    let countDrinks = Number(input[2]);
    let sum = 0;
    switch (drinks) {
        case "Espresso":
            switch (sugar) {
                case "Without":
                    sum = 0.90 * countDrinks;
                    break;
                case "Normal":
                    sum = 1 * countDrinks;
                    break;
                case "Extra":
                    sum = 1.20 * countDrinks;
                    break;
            }
            break;
        case "Cappuccino":
            switch (sugar) {
                case "Without":
                    sum = 1.00 * countDrinks;
                    break;
                case "Normal":
                    sum = 1.20 * countDrinks;
                    break;
                case "Extra":
                    sum = 1.60 * countDrinks;
                    break;
            }
            break;
        case "Tea":
            switch (sugar) {
                case "Without":
                    sum = 0.50 * countDrinks;
                    break;
                case "Normal":
                    sum = 0.60 * countDrinks;
                    break;
                case "Extra":
                    sum = 0.70 * countDrinks;
                    break;
            }
            break;
    }
    if (sugar == "Without") {
        sum *= 0.65;
    }
    if (drinks == "Espresso" && countDrinks >= 5) {
        sum *= 0.75;
    }
    if (sum > 15) {
        sum *= 0.80;
    }
    console.log(`You bought ${countDrinks} cups of ${drinks} for ${sum.toFixed(2)} lv.`);
}

coffeeMachine(["Espresso",
"Without",
"10"]);