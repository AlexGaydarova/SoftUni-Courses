function minNumber(input) {
    let num = Number(input[0]);
    let index = 1;
    let min = Number.MAX_SAFE_INTEGER;
    while (num !== "Stop") {
        let current = Number(num);
        if (current < min) {
            min = current;
        }
        num = input[index]
        index++
    }
    console.log(min);
}

minNumber(["100",
"99",
"80",
"70",
"Stop"]);