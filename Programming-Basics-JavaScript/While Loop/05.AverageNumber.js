function averageNumber(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let tempN = Number(input[index]);
    let sumN = 0;
    while (index <= n) {
        tempN = Number(input[index]);
        sumN += tempN; 
        index++;
    }
    let average = sumN / n;
    console.log(average.toFixed(2));
}

averageNumber(["4", "3", "2", "4", "2"]);