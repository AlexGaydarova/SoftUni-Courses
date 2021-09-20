function bills(input) {
    let months = Number(input[0]);
    let tok = Number(input[1]);
    let voda = 20;
    let internet = 15;
    let others = 0;
    let sum = 0;
    let tokCount = 0;
    let vodaCount = 0;
    let internetCount = 0;
    let othersCount = 0;

    for (let i = 1; i <= months; i++) {
        tok = Number(input[i]);
        tokCount += tok
        vodaCount += voda;
        internetCount += internet;
        others = (tok + voda + internet) * 1.20;
        othersCount += others
    }
    
    sum = tokCount + vodaCount + internetCount + othersCount;
    let average = sum / months;

    console.log(`Electricity: ${tokCount.toFixed(2)} lv`);
    console.log(`Water: ${vodaCount.toFixed(2)} lv`);
    console.log(`Internet: ${internetCount.toFixed(2)} lv`);
    console.log(`Other: ${othersCount.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
}

//bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
bills(["8", "123.54", "231.54", "140.23", "100", "122.4", "430", "178.52","64.2"]);