function smallestTwoNumbers(num) {
    num.sort((a, b) => a - b);
    console.log(num.slice(0,2).join(' '));
    //console.log(`${num[0]} ${num[1]}`);
}

smallestTwoNumbers([30, 15, 50, 5]);