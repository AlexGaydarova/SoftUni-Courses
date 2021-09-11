function primePairs(input) {
    let startCouple1 = Number(input[0]);
    let startCouple2 = Number(input[1]);
    let diffCouple1 = Number(input[2]);
    let diffCouple2 = Number(input[3]);
    let endCouple1 = startCouple1 + diffCouple1;
    let endCouple2 = startCouple2 + diffCouple2;

    for ( let i = startCouple1; i <= endCouple1; i++) {
        for (let j = startCouple2; j <= endCouple2; j++) {
            let isFirstNumPrime = true; // Просто ли е числото - Да
            let isSecondNumPrime = true;
            for (let k = 2; k <= Math.sqrt(i); k++) {
                if (i % k == 0) {
                    isFirstNumPrime = false;
                    break;
                }
            }
            for (let l = 2; l <= Math.sqrt(j); l++) {
                if (j % l == 0) {
                    isSecondNumPrime = false; // ако се дели не е просто!
                    break;
                }
            }
            if (isFirstNumPrime && isSecondNumPrime) { // ако е просто го отпечатай!
                console.log(`${i}${j}`);
            }
        }
    }
}

primePairs([10,20,5,5]);