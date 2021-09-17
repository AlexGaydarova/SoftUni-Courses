function logistics(input) {
    let countTovar = Number(input[0]);
    let tonajTovar = Number(input[1]);
    let sumTovari = 0;
    let countMikrobus = 0;
    let countKamion = 0;
    let countVlak = 0
    
    for (let i = 1; i <= countTovar; i++) {
       tonajTovar = Number(input[i]); 
       sumTovari += Number(input[i]);
        if (tonajTovar <= 3) {
            countMikrobus += tonajTovar
        } else if (tonajTovar <= 11) {
            countKamion += tonajTovar
        } else if ( tonajTovar >= 12) {
            countVlak += tonajTovar
        }
    }
    let averageTon = ((countMikrobus * 200) + (countKamion * 175) + (countVlak * 120)) / sumTovari;
    let procentMikrobus = (countMikrobus / sumTovari) * 100;
    let procentKamion = (countKamion / sumTovari) * 100;
    let procentVLak = (countVlak / sumTovari) * 100;

    console.log(averageTon.toFixed(2));
    console.log(`${procentMikrobus.toFixed(2)}%`);
    console.log(`${procentKamion.toFixed(2)}%`);
    console.log(`${procentVLak.toFixed(2)}%`);
}

logistics(["4", "1", "5", "16", "3"]);
