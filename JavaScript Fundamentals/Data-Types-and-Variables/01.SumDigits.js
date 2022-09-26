function sumDigits(num) {
    num = num.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    console.log(sum);
}

sumDigits(97561);

function digits(number) {
    let numAsString= number.toString();
    let sum = 0;
    for (let digit of numAsString) {
        sum += Number(digit);
    }
    console.log(sum);
}
