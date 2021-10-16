function passengersPerFlight(input) {
    let countCompanies = Number(input[0]);
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;
    let nameMax = "";
    let counterCompanies = 0;
     while (true) {
         counterCompanies ++;
         if (counterCompanies > countCompanies) {
             break;
         }
        let nameCompany = input[index];
        index++;
        let counter = 0;
        let totalPassengers = 0;
        let avgPassengers = 0;
        while (input[index] != "Finish") {
            let passengers = Number(input[index]);
            counter++
            totalPassengers += passengers;
            avgPassengers = totalPassengers / counter;
            index++;
            if (max < avgPassengers) {
                max = avgPassengers;
                nameMax = nameCompany;

            }
            continue;
        }
        console.log (`${nameCompany}: ${Math.floor(avgPassengers)} passengers.`);
        index++;
     }
     console.log(`${nameMax} has most passengers per flight: ${Math.floor(max)}`);
}



passengersPerFlight(["3", "WizzAir", "180", "230","100", "Finish", "BulgariaAir",
"50", "60", "90", "Finish", "Lufthansa", "260", "320", "Finish"]);


