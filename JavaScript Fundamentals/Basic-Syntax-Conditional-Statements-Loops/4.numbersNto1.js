function printNumbers(n) {
    while (n >= 1) {
        console.log(n);
        n--;
    }
}

function printNumbers1(n) {
    for (let i=n; i>=1; i--) {
        console.log(i);
    }
}

printNumbers1(4);