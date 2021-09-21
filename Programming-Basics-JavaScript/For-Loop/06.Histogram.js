function histogram(input) {
    let n = Number(input[0]);

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);
        if (num < 200) {
            p1Counter++;
        } else if (num <= 399) {
            p2Counter++
        } else if (num <= 599) {
            p3Counter++
        } else if (num <= 799) {
            p4Counter++
        } else {
            p5Counter++
        }
    }
    let p1Result = p1Counter / n * 100;
    let p2Result = p2Counter / n * 100;
    let p3Result = p3Counter / n * 100;
    let p4Result = p4Counter / n * 100;
    let p5Result = p5Counter / n * 100;

    console.log(p1Result.toFixed(2) + "%");
    console.log(p2Result.toFixed(2) + "%");
    console.log(p3Result.toFixed(2) + "%");
    console.log(p4Result.toFixed(2) + "%");
    console.log(p5Result.toFixed(2) + "%");
}

histogram(["3", "1", "2", "999"]);