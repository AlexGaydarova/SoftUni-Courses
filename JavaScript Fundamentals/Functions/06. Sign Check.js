function sign(a, b, c) {
    if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
        if (c > 0) {
            console.log('Positive');
        } else {
            console.log('Negative')
        }
    } else {
        if (c > 0) {
            console.log('Negative')
        } else {
            console.log('Positive');
        }
    }
}

sign(5 ,12 ,-15);


function signCheck(numOne, numTwo, numThree) {
    let result = '';
    if (numOne >= 0 && numTwo >= 0 && numThree >= 0) {
        result = 'Positive';
    } else if (numOne <= 0 && numTwo <= 0 && numThree <= 0){
        result = 'Negative';
    } else  if (numOne <= 0 && numTwo >= 0 && numThree >= 0) {
        result = 'Negative';
    } else  if (numOne >= 0 && numTwo <= 0 && numThree >= 0) {
        result = 'Negative';
    } else  if (numOne >= 0 && numTwo >= 0 && numThree <= 0) {
        result = 'Negative';
    } else if (numOne <= 0 && numTwo <= 0 && numThree >= 0) {
        result = 'Positive';
    } else if (numOne <= 0 && numTwo >= 0 && numThree <= 0) {
        result = 'Positive';
    } else if (numOne >= 0 && numTwo <= 0 && numThree <= 0) {
        result = 'Positive';
    }
    console.log(result);
}

//signCheck(5 ,12 ,-15);
