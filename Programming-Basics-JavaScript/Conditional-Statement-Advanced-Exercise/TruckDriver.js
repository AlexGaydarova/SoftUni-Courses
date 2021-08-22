function truckDriver(input) {
    let season = input[0];
    let kmMonth = Number(input[1]);
    let salary;
    switch (season) {
        case "Spring":
        case "Autumn":
            if (kmMonth <= 5000) {
                salary = 0.75 * kmMonth * 4;
            } else if (kmMonth <= 10000) {
                salary = 0.95 * kmMonth * 4;
            } else if (kmMonth <= 20000) {
                salary = 1.45 * kmMonth * 4;
            }
            break;
        case "Summer":
            if (kmMonth <= 5000) {
                salary = 0.90 * kmMonth * 4;
            } else if (kmMonth <= 10000) {
                salary = 1.10 * kmMonth * 4;
            } else if (kmMonth <= 20000) {
                salary = 1.45 * kmMonth * 4;
            }
            break;
        case "Winter":
            if (kmMonth <= 5000) {
                salary = 1.05 * kmMonth * 4;
            } else if (kmMonth <= 10000) {
                salary = 1.25 * kmMonth * 4;
            } else if (kmMonth <= 20000) {
                salary = 1.45 * kmMonth * 4;
            }
            break;
    }
    salary *= 0.90;
    console.log(salary.toFixed(2));
}

truckDriver(["Summer", "3455"]);

