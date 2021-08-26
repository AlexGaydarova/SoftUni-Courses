function uniquePINCodes(input) {
    let endFisrt = Number(input[0]);
    let endSecond = Number(input[1]);
    let endThird = Number(input[2]);

    for (let i = 2; i <= endFisrt; i+= 2) { // четни 2,4,6.. стъпка през 2.
        for (let j = 2; j <= endSecond; j++) { // просто число от 2-7
            for (let k = 2; k <= endThird; k += 2) { // четни 2,4,6.. стъпка през 2.
                if (j == 2 || j== 3|| j == 5 || j == 7) {
                    console.log(i + " " + j + " " + k);
                }
            }
        }
    }
}

uniquePINCodes(["3", "5", "5"]);
