function numbersDivisibleBy9(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let result = 0;
    let resultString = "";
    for (let i = num1; i <= num2; i++ ) {
        if (i % 9 == 0) {
            result += i;
            resultString = resultString + i + " "; 
            // изкарва ги на един ред с разстояние
        }
    }
    console.log(result);
    console.log(resultString);
}

//numbersDivisibleBy9(["100", "200"]);

function numbersDivisibleBy9(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let result = 0;
    let resultString = "";
    for (let i = n; i <= m; i++ ) {
        if (i % 9 == 0) {
            result += i;
            resultString = resultString + i + "\n"; 
            // всяко на нов ред.
        }
    }
    console.log(`The sum: ${result}`);
    console.log(resultString);
}

numbersDivisibleBy9(["100", "200"]);
