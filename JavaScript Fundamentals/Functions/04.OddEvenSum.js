function oddEvenSum(num) {
    let numAsString = num.toString();
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < numAsString.length; i++) {
        let current = Number(numAsString[i]);
        if (current % 2 === 0) {
            sumEven += current;
        } else {
            sumOdd += current;
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

oddEvenSum(1000435);