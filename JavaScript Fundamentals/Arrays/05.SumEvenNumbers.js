function sumEvenNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let current = Number(array[i]);
        if (current % 2 === 0) {
            sum += current;
        }
    }
    console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6']);
sumEvenNumbers(['2','4','6','8','10']);