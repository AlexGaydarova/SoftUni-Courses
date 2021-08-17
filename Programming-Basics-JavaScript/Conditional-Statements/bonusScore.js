function bonusScore(input) {
    let num = Number(input[0]);
    let bonus = 0.0;
if (num <= 100) {
    bonus = 5;
} else if (num > 1000) {
    bonus = 0.10 * num;
} else {
    bonus =  0.20 * num;
} if (num % 2 == 0) {
    bonus = bonus + 1;
} else if (num % 10 == 5) { // завършващи на 5
    bonus = bonus +2;
}
console.log(bonus);
console.log(num + bonus);
}

bonusScore(["20"]);
bonusScore(["175"]);
bonusScore(["2703"]);
bonusScore(["15875"]);

