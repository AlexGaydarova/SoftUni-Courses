function footballLeague(input) {
    let capacity = Number(input[0]);
    let fens = Number(input[1]);
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;

    for (let i = 2; i <= fens + 1; i++){
        let sector = input[i];
        if (sector == "A") {
            counter1++
        } else if (sector == "B") {
            counter2++
        } else if (sector == "V") {
            counter3++
        } else if (sector == "G") {
            counter4++
        }
    }
    let procentA = counter1 / fens * 100;
    let procentB = counter2 / fens * 100;
    let procentV = counter3 / fens * 100;
    let procentG = counter4 / fens * 100;
    let procentFens = fens / capacity * 100;

    console.log(`${procentA.toFixed(2)}%`);
    console.log(`${procentB.toFixed(2)}%`);
    console.log(`${procentV.toFixed(2)}%`);
    console.log(`${procentG.toFixed(2)}%`);
    console.log(`${procentFens.toFixed(2)}%`);
}

footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);