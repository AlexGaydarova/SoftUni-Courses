function sumOfTwoNumbers(input) {
    let numStart = Number(input[0]);
    let numEnd = Number(input[1]);
    let magicNum = Number(input[2]);
    let counter = 0;
    let flag = false;

    for (let i = numStart; i <= numEnd; i++) {
        for (let j = numStart; j <= numEnd; j++) {
            counter++;
            if (i + j == magicNum) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${i + j})`);
                flag = true;
                break;
            }
        }
        if (flag) {
            break;
        }
    }
    if (!flag) {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}

sumOfTwoNumbers(["1","10","5"]);