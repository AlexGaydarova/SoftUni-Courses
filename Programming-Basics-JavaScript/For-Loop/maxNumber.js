function maxNumber(input) {
    let n = Number(input[0]);
    let max = Number.MIN_VALUE

    for (let i = 1; i <= n; i++) {
        let currentN = Number(input[i]);
        if (currentN > max) {
            max = currentN;
        }
    }
    console.log(max);
}
maxNumber(["4",
"120",
"-20",
"7",
"99"]);