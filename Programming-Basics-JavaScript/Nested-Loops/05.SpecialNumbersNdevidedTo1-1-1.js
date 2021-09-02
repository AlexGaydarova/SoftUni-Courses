function specialNumbers(input) {
    let n = Number(input[0]);
    let print = "";
    
    for (let i = 1111; i <= 9999; i++) {
        let currentN = "" + i;
        let flag = false;
        let tempTogether = "";
        for (let j = 0; j < currentN.length; j++) {
            let tempNum = Number(currentN[j]);
            if (n % tempNum == 0) {
                tempNum = "" + tempNum
                tempTogether += `${tempNum}`;
                continue
            }
            }
            if (tempTogether.length == 4) {
                flag = true; // да отоваря дели се.
        }
        if (flag) {
            print += `${i} `; // добавяме цялото число на всеки цикъл.
        }
    }
    console.log(print);
}

specialNumbers(["3"]);