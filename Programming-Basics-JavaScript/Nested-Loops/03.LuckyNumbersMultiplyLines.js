function luckyNumbers(input) {
    let n = Number(input[0]);
    for (let i = 1; i <= 9; i++) {
        let tempPrint = "";
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    if ((i + j == k + l) && (n % (i + j) == 0)) {
                        console.log("" + i + j + k + l + ""); // превръщаме в текст и долепяме, за да не се съберат числата. 
                    }
                }
            }
        }
    }
}