function specialNumbers(n) {
    
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let iAsString = i.toString();
        for (let digit of iAsString) {
            sum += Number(digit);
        }
        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        } 
    }
}

specialNumbers(15);


