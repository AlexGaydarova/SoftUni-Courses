function divideWithoutRemainder(input) {
    let n = Number(input[0]);

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);
        if (num % 2 == 0) {
            p1Counter++
        } 
        if (num % 3 == 0) {
            p2Counter++
        } 
        if (num % 4 == 0) {
            p3Counter++
        }
    }
    
let p1 = p1Counter / n * 100;
let p2 = p2Counter / n * 100;
let p3 = p3Counter / n * 100;

console.log(p1.toFixed(2) + "%");
console.log(p2.toFixed(2) + "%");
console.log(p3.toFixed(2) + "%");
}

divideWithoutRemainder(["3",
"3",
"6",
"9"])
