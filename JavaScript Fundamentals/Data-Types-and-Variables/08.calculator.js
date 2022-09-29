function calculator1(firstNumber, operator, secondNumber) { 
    if (operator === '+') {
        console.log((firstNumber + secondNumber).toFixed(2));
    } else if (operator === '-') {
        console.log((firstNumber - secondNumber).toFixed(2)); 
    } else if (operator === '*') {
        console.log((firstNumber * secondNumber).toFixed(2)); 
    } else if (operator === '/') {
        console.log((firstNumber / secondNumber).toFixed(2)); 
    }
}

calculator1(5,'+',10);

function calculator(num1, operator, num2) {    
    console.log(eval(num1 + operator + num2).toFixed(2));    
}

calculator(5,'+',10);