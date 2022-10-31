function carWash(input) {
    let cleanedCar = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'soap') {
            cleanedCar += 10;
        } else if (input[i] === 'water') {
            cleanedCar *= 1.20;
        } else if (input[i] === 'vacuum cleaner') {
            cleanedCar *= 1.25;
        } else if (input[i] === 'mud') {
            cleanedCar *= 0.90;
        }
    }
    console.log(`The car is ${cleanedCar.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);