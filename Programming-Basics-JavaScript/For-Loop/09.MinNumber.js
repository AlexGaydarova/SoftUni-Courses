function minNumber(input) {
    let n = Number(input[0]);
    let minN = Number.MAX_VALUE

    for (let i = 1; i <= n; i++) {
        let currentN = Number(input[i]);
        if (currentN < minN) {
            minN = currentN;
        }
    }
    console.log(minN);
}

minNumber(["4",
"45",
"-20",
"7",
"99"]);