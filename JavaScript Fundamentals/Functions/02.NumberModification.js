function numModif(modifiedNumber) {
    while (getAverage(modifiedNumber) < 5) { // проверяваме докато 0,66 < 5
        modifiedNumber += '9'; //  добавяме накрая 9-ка. като стринг.
    }
    console.log(modifiedNumber);

    function getSum(number) {
        let numToString = number.toString();// числото 101 го правя на стринг.
        let sum = 0; // сумата е нула първоначално.
        for (let i = 0; i < numToString.length; i++) { //цикъл през цифрите '1','0','1'
            sum += Number(numToString[i]); // добавяме ги 1 + 0 + 1 = 2
        }
        return sum;
    }
 
    function getAverage(num) {
        return getSum(num) / num.toString().length; // 2 / 3 = 0,667- делено на броя на символите(дължината.)
    }
}

numModif(101);


function numberModification2(number) {
    const getDigitsAverage = num => num.toString().split('').map(Number).reduce((a, b) => a + b, 0) / num.toString().length;
    while (getDigitsAverage(number) < 5) number += '9';
    console.log(number);
}

