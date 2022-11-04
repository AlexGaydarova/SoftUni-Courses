function simpleCalculator(a, b, operator) {
    switch (operator) {
        case 'multiply':
            let multiply = (a,b) => a * b;
            console.log(multiply(a,b))
            break;
        case 'divide':
            let divide = (a,b) => a / b;
            console.log(divide(a,b));
            break;
        case 'add':
            let add = (a,b) => a + b;
            console.log(add(a,b));
            break;
        case 'subtract':
        let subtract = (a,b) => a - b;
        console.log(subtract(a,b));
        break;
    }
}

simpleCalculator(5, 5, 'multiply');

function calc(a, b, operator) {
    let operators = {
        'multiply': (a,b) => a * b,
        'divide': (a,b) => a / b,
        'add': (a,b) => a + b,
        'subtract': (a,b) => a - b
    };
    let result = operators[operator](a,b);
    console.log(result);
}

calc(5, 5, 'multiply');

let calc = (a, b, operator)  => 
console.log(({
        'multiply': (a,b) => a * b,
        'divide': (a,b) => a / b,
        'add': (a,b) => a + b,
        'subtract': (a,b) => a - b
    })[operator](a,b));
