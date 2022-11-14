function factorialDivision(num1,num2) {
    let factoriel1 = 1;
    let factoriel2 = 1;
    for (let i = 1; i <= num1; i++ ) {
        factoriel1 *= i; // 5 = 1 * 2 * 3 * 4 * 5; 
        //5! = 5 x 4 x 3 x 2 x 1
    }
    for (let i = 1; i <= num2; i++ ) {
        factoriel2 *= i; // 2! = 2 * 1;
    }
    let result = factoriel1 / factoriel2; // 120 / 2;
    console.log(result.toFixed(2));
    
}

factorialDivision(5, 2);