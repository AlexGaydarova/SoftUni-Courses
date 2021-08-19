function fruitShop(input) {
    let fruit = input[0];
    let dayOfWeek = input[1];
    let count = Number(input[2]);
    let totalPrice = 0;
    switch (fruit) {
        case "banana":
            switch (dayOfWeek) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    totalPrice = count * 2.50;
                    break;
                case "Saturday":
                case "Sunday":
                    totalPrice = count * 2.70;
                    break;
            }
        break;
        case "apple":
            switch (dayOfWeek) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    totalPrice = count * 1.20;
                    break;
                case "Saturday":
                case "Sunday":
                    totalPrice = count * 1.25;
                    break;
            }
        break;
        case "orange":
            switch (dayOfWeek) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    totalPrice = count * 0.85;
                    break;
                case "Saturday":
                case "Sunday":
                    totalPrice = count * 0.90;
                    break;
            }
        break;
        case "grapefruit":
            switch (dayOfWeek) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    totalPrice = count * 1.45;
                    break;
                case "Saturday":
                case "Sunday":
                    totalPrice = count * 1.60;
                    break;
            }
        break;
        case "kiwi":
            switch (dayOfWeek) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    totalPrice = count * 2.70;
                    break;
                case "Saturday":
                case "Sunday":
                    totalPrice = count * 3.00;
                    break;
            }
        break;
        case "pineapple":
            switch (dayOfWeek) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    totalPrice = count * 5.50;
                    break;
                case "Saturday":
                case "Sunday":
                    totalPrice = count * 5.60;
                    break;
            }
        break;
        case "grapes":
            switch (dayOfWeek) {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    totalPrice = count * 3.85;
                    break;
                case "Saturday":
                case "Sunday":
                        totalPrice = count * 4.20;
                        break;
            }
        break;
    }
     if (totalPrice > 0) {
         console.log(totalPrice.toFixed(2));
     } else {
         console.log("error");
     }
}
fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["tomato", "Monday", "5"]);
