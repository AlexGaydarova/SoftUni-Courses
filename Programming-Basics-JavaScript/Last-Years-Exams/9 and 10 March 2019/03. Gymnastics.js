function gymnastics(input) {
    let country = input[0];
    let equipment = input[1];
    let grade = 0;
    let procent = 0;

    switch (country) {
        case "Russia":
            switch (equipment) {
                case "ribbon":
                    grade = 9.100 + 9.400;
                    procent = (20 - grade) / 20 * 100;
                    break;
                case "hoop":
                    grade = 9.300 + 9.800;
                    procent = (20 - grade) / 20 * 100;
                    break;
                case "rope":
                    grade = 9.600 + 9.000;
                    procent = (20 - grade) / 20 * 100;
                    break;
            }
            break;
        case "Bulgaria":
            switch (equipment) {
                case "ribbon":
                    grade = 9.600 + 9.400;
                    procent = (20 - grade) / 20 * 100;
                    break;
                case "hoop":
                    grade = 9.550 + 9.750;
                    procent = (20 - grade) / 20 * 100;
                    break;
                case "rope":
                    grade = 9.500 + 9.400;
                    procent = (20 - grade) / 20 * 100;
                    break;
                }
                 break;
            case "Italy":
            switch (equipment) {
                case "ribbon":
                    grade = 9.200 + 9.500;
                    procent = (20 - grade) / 20 * 100;
                    break;
                case "hoop":
                    grade = 9.450 + 9.350;
                    procent = (20 - grade) / 20 * 100;
                    break;
                case "rope":
                    grade = 9.700 + 9.150;
                    procent = (20 - grade) / 20 * 100;
                    break;
            }
            break;
    }
    console.log(`The team of ${country} get ${grade.toFixed(3)} on ${equipment}.`);
    console.log(`${procent.toFixed(2)}%`);
}

//gymnastics(["Bulgaria","ribbon"]);
gymnastics(["Russia", "rope"]);
