function secretDoorsLock(input) {
    let first = Number(input[0]); // 1-9
    let second = Number(input[1]);
    let third = Number(input[2]);

    for (let i = 1; i <= first; i++) {
        for (let j = 2; j <= second; j++) {
            for (let k = 1; k <= third; k++) {
                if (i % 2 == 0 && k % 2 == 0) {
                    if (j == 2 || j== 3|| j == 5 || j == 7) {
                        console.log(`${i} ${j} ${k}`);
                }
            }
        }
     }
  }
}
secretDoorsLock([3,5,5]);