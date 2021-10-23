function sortNumbers(n1,n2,n3) {
    let arrayNumbers = [];
    arrayNumbers.push(n1,n2,n3);
    let sorted = arrayNumbers.sort((a, b) => b - a);
    console.log(sorted.join('\n'));
}

// sortNumbers(2,1,3);

function sort2(n1,n2,n3) {
    if (n1 > n2 & n1 > n3) {
        if (n2 > n3) {
            console.log(n1);
            console.log(n2);
            console.log(n3);
        } else if (n3 > n2) {
            console.log(n1);
            console.log(n3);
            console.log(n2);
        }
    } else if (n2 > n1 && n2 > n3) {
        if (n1 > n3) {
            console.log(n2);
            console.log(n1);
            console.log(n3);
        } else if (n3 > n1) {
            console.log(n2);
            console.log(n3);
            console.log(n1);
        }
    } else if (n3 > n1 && n3 > n2) {
        if (n1 > n2) {
            console.log(n3);
            console.log(n1);
            console.log(n2);
        } else if (n2 > n1) {
            console.log(n3);
            console.log(n2);
            console.log(n1);
        }
    }
}

sort2(2,1,3);