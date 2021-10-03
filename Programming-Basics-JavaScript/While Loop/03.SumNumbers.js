function sumNumbers(input) {
    let num = Number(input[0]);
    let currentNum = Number(input[1]);
    let index = 1;
    let sum = 0;
    while (true) {
        currentNum = Number(input[index]);
        sum += currentNum;
        index++
        if (sum >= num) {
            break;
        }  
    }
    console.log(sum);
}

sumNumbers(["100",
"10",
"20",
"30",
"40"])