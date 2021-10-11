function fuelTank(input) {
    let typeGorivo = input[0];
    let litriGorivo = Number(input[1]);
    switch (typeGorivo) {
        case "Diesel":
        case "Gasoline":
        case "Gas":
            if (litriGorivo < 25) {
                console.log(`Fill your tank with ${typeGorivo.toLowerCase()}!`);
            } else if ( litriGorivo >= 25) {
                console.log(`You have enough ${typeGorivo.toLowerCase()}.`); 
            }
            break;
        default:
            console.log(`Invalid fuel!`);
            break;
    }
}

fuelTank(["Diesel", "10"]);
//fuelTank(["Gasoline", "40"]);
//fuelTank(["Gas", "25"]);
//fuelTank(["Kerosene", "200"]);