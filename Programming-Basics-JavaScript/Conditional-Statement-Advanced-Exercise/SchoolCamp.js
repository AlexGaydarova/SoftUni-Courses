function schoolCamp(input) {
    let season = input[0];
    let typeGroup = input[1];
    let countStudents = Number(input[2]);
    let countNights = Number(input[3]);
    let sport;
    let price;
    switch (season) {
        case "Winter":
            switch (typeGroup) {
                case "boys":
                    sport = "Judo";
                    price = 9.60 * countStudents * countNights;
                    break;
                case "girls":
                    sport = "Gymnastics";
                    price = 9.60 * countStudents * countNights;
                    break;
                case "mixed":
                    sport = "Ski";
                    price = 10 * countStudents * countNights;
                    break;
            }
            break;
        case "Spring":
            switch (typeGroup) {
                case "boys":
                    sport = "Tennis";
                    price = 7.20 * countStudents * countNights;
                    break;
                case "girls":
                    sport = "Athletics";
                    price = 7.20 * countStudents * countNights;
                    break;
                case "mixed":
                    sport = "Cycling";
                    price = 9.50 * countStudents * countNights;
                    break;
            }
            break;
        case "Summer":
            switch (typeGroup) {
                case "boys":
                    sport = "Football";
                    price = 15 * countStudents * countNights;
                    break;
                case "girls":
                    sport = "Volleyball";
                    price = 15 * countStudents * countNights;
                    break;
                case "mixed":
                    sport = "Swimming";
                    price = 20 * countStudents * countNights;
                    break;
            }
            break;
    } if (countStudents < 10) {
        price = price;
    } else if (countStudents >= 10 && countStudents < 20) {
        price *= 0.95;
    } else if (countStudents < 50) {
        price *= 0.85;
    } else if (countStudents >= 50) {
        price *= 0.50;
    } 
    console.log(`${sport} ${price.toFixed(2)} lv.`);
}

//schoolCamp(["Spring", "girls", "20", "7"]);
schoolCamp(["Winter", "mixed", "9", "15"]);
