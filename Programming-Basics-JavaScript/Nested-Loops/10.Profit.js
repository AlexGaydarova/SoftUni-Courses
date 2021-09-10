function profit(input) {
    let countCoins1 = Number(input[0]);
    let countCoins2 = Number(input[1]);
    let countCash5 = Number(input[2]);
    let sum = Number(input[3]);

    for (let i = 0; i <= countCoins1; i ++) {
        for (let j = 0; j <= countCoins2; j++) {
            for (let k = 0; k <= countCash5; k++) {
                if (i * 1 + j * 2 + k * 5 == sum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}
profit(["3", "2", "3", "10"]);
