function roundNum(num1,num2) {
    if (num2 > 15) {
        num2 = 15;
    }
    let rounded = num1.toFixed(num2);
    let withoutZeros = parseFloat(rounded);
    console.log(withoutZeros);
}

roundNum(3.1415926535897932384626433832795,2);
roundNum(10.5,3);