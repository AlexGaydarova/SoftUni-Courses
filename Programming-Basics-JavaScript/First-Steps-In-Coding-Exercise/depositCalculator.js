function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let annualInterestRate = Number(input[2]);
    let sumInterestRate = depositSum *(annualInterestRate * 0.01);
    let monthInterest = sumInterestRate/12;
    let totalSum = depositSum +(depositTerm * monthInterest);
    console.log(totalSum);
}

//let totalSum = depositSum + (depositTerm *(depositSum * (annualInterestRate * 0.01)/12));

//Allrate: 200 * 5.7% = 11.4lv
//rate for 1 month: 11.4 lv./12 months = 0.95lv
//totalSum is  200lv deposit + (3 (term of the deposit) * 0.95 lv)
//sum = depositSum + term of deposit * ((depositSUm * allrate ) / 12)

depositCalculator(["200","3","5.7"]);
depositCalculator(["2350","6","7"]);


