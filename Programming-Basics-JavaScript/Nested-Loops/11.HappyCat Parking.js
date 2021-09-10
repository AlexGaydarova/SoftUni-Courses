function happyCatParking(input) {
    let days = Number(input[0]);
    let hoursPerDay = Number(input[1]);
    let totalSum = 0;
    for (let i = 1; i <= days; i++) { 
        let sumDay = 0; // зануляваме сумата за следващия ден.
        for ( let j = 1; j <= hoursPerDay; j++) { 
            if (i % 2 == 0 && j % 2 == 1) {
                sumDay += 2.50;
            } else if (i % 2 == 1 && j % 2 == 0) {
                sumDay += 1.25;
            } else {
                sumDay += 1;
            }
        }
        totalSum += sumDay;
        console.log(`Day: ${i} - ${sumDay.toFixed(2)} leva`);
    }
console.log(`Total: ${totalSum.toFixed(2)} leva`);
}

happyCatParking([2,5]);