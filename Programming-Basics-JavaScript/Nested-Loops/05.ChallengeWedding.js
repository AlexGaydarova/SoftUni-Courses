function challengeTheWedding(input) {
    let countMen = Number(input[0]);
    let countWoman = Number(input[1]);
    let tables = Number(input[2]);
    let fullTables = 2 * tables;
    let print = "";
    let counter = 0;
    
    for (let i = 1; i <= countMen; i++) {
        for (let j = 1; j <= countWoman; j++){
            if (fullTables <= counter) {
                break;
            }
            counter += 2
            print += `(${i} <-> ${j}) `;
        }
    }
    console.log(print);
}

challengeTheWedding([2,2,3]);