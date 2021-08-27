function lettersCombinations(input) {
    let letter1 = input[0].charCodeAt(0); // начало превръщаме буквата в код цифра а=97
    let letter2 = input[1].charCodeAt(0); // край на интервала
    let letter3 = input[2].charCodeAt(0); // пропускаме тази буква.
    let counter = 0;
    let print = "";
    for (let i = letter1; i <= letter2; i++) {
        for (let j = letter1; j <= letter2; j++) {
            for (let k = letter1; k <= letter2; k++) {
                let firstLetter = String.fromCharCode(i); // превръщаме кода в буква.
                let secondLetter = String.fromCharCode(j);
                let thirdLetter = String.fromCharCode(k);
                if (i != letter3 && j != letter3 && k != letter3) {
                    print += (firstLetter + secondLetter + thirdLetter) + " ";
                    counter++;
                }
            }
        }
    }
    console.log(`${print}${counter}`);
}
lettersCombinations(["a", "c", "b"]);