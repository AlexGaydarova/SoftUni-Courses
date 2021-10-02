function reportSystem(input) {
    let index = 0;
    let expectedSumSales = Number(input[index]);
    index++;
    let comand = input[index];
    index++;
    let realSum = 0;
    let realSumCash = 0;
    let realSumCard = 0;
    let counterCash = 0;
    let counterCard = 0;
    let counter = 0;
    
    while (comand != "End") {
        let tempPrice = Number(comand);
        counter++;
        if (counter % 2 == 1){ // нечетно плащаме в кеш
            if (tempPrice > 100) {
                console.log(`Error in transaction!`);
            } else {
                console.log(`Product sold!`);
                realSumCash += tempPrice;
                counterCash++;
                realSum += tempPrice;
            }
        } else { // четно - плащаме с карта
            if (tempPrice > 10) {
                console.log(`Product sold!`);
                realSumCard += tempPrice;  
                counterCard++;
                realSum += tempPrice;
            } else {
                console.log(`Error in transaction!`);
            }
        }
        if (realSum >= expectedSumSales) {
            break;
        }
        comand = input[index];
        index++; 
    }
    if (realSum >= expectedSumSales){
        let averageCash = realSumCash / counterCash;
        let averageCard = realSumCard / counterCard;
        console.log(`Average CS: ${averageCash.toFixed(2)}`);
        console.log(`Average CC: ${averageCard.toFixed(2)}`);
    } else {
        console.log(`Failed to collect required money for charity.`);
    }   
}

reportSystem(["500", "120", "8", "63", "256", "78", "317"]);
