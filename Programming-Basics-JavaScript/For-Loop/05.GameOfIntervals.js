function gameOfIntervals(input) {
    let n = Number(input[0]);
    let step = Number(input[1]);
    let result = 0;
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;
    let counter5 = 0;
    let counter6 = 0;
    for (let i = 1; i <= n; i++) {
        step = Number(input[i]);
        if (step >= 0 && step <= 9) {
            result += 0.20 * step;
            counter1++
        } else if (step >= 10 && step <= 19) {
            result += 0.30 * step;
            counter2++
        } else if (step >= 20 && step <= 29) {
            result += 0.40 * step;
            counter3++
        } else if (step >= 30 && step <= 39) {
            result += 50;
            counter4++
        } else if (step >= 40 && step <= 50) {
            result += 100;
            counter5++
        } else if (step < 0 || step > 50) {
            result /= 2;
            counter6++
        }
    }
    let p1 = counter1 / n * 100;
    let p2 = counter2 / n * 100;
    let p3 = counter3 / n * 100;
    let p4 = counter4 / n * 100;
    let p5 = counter5 / n * 100;
    let p6 = counter6 / n * 100;
    
    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${p1.toFixed(2)}%`);
    console.log(`From 10 to 19: ${p2.toFixed(2)}%`);
    console.log(`From 20 to 29: ${p3.toFixed(2)}%`);
    console.log(`From 30 to 39: ${p4.toFixed(2)}%`);
    console.log(`From 40 to 50: ${p5.toFixed(2)}%`);
    console.log(`Invalid numbers: ${p6.toFixed(2)}%`);
}


gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);
