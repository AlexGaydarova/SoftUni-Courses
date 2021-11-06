function bitcoins(input) {
    let bitcoinsCount = 0;
    let totalMoney = 0;
    let day = 0;
    let currentDay = 0;
 
    for (let i = 0; i < input.length;i++) {
        let gramsGold = input[i];
        day++;
 
        if(day % 3 == 0) {
            gramsGold *= 0.70;
        }
 
        totalMoney += (67.51*gramsGold);
    
        if(totalMoney >= 11949.16) {
            if(currentDay == 0) {
                currentDay = day;
            }
 
            bitcoinsCount += parseInt(totalMoney / 11949.16);
 
            totalMoney -= parseInt(totalMoney / 11949.16) * 11949.16;
            
        }
 
        
    }
            
if(bitcoinsCount >= 1) {
    console.log(`Bought bitcoins: ${bitcoinsCount}`);
    console.log(`Day of the first purchased bitcoin: ${currentDay}`);  
} else {
    console.log(`Bought bitcoins: ${bitcoinsCount}`);
}
 
console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
 
 
}
