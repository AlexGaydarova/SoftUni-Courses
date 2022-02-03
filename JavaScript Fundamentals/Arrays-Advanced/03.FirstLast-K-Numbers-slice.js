function firstLastKNums(num) {
    let k = num[0];
    let first = num.slice(1,k + 1);
    let second = num.slice(- k);
    console.log(first.join(' '));
    console.log(second.join(' '));
}

firstLastKNums([2, 7, 8, 9]);