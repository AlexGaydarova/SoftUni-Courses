function equalSumsEvenOddPosition(input) {
    let StartNum = Number(input[0]);
    let EndNum= Number(input[1]);
    let print = "";
    for (let i = StartNum; i <= EndNum; i++) {
        let curentNum = "" + i; //числото на тек.поз. като текст, конкатенирате с празен стринг
        let sumOdd = 0;
        let sumEven = 0;
        for (let j = 0; j < curentNum.length; j++) {
            let tempNum = Number(curentNum[j]); // или curentNum.charAt(j)
            if (j % 2 == 0) {
                sumEven += tempNum;
            } else {
                sumOdd += tempNum;
            }
        }
        if (sumOdd == sumEven) {
            print += `${i} ` // със спейс, за да има разстояние м/у цифрите.
        }
    }
    console.log(print);
}

equalSumsEvenOddPosition(["100000","100050"]);