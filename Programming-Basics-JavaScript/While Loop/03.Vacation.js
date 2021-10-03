function vacation(input) {
    let index = 0; //не знаем колко входни данни

    let needMoney = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;

    let counter = 0;
    let dayCounter = 0;
    while (money < needMoney) {
        dayCounter++;
        let action = input[index];
        index++;

        let tempMoney = Number(input[index]);
        index++;

        if (action === "save") {
            money += tempMoney;
            counter = 0; //зануляваме брояча, защото при 5 последователни дни на харчене спираме. 
        } else {
            money -= tempMoney;
            if (money < 0) {
                money = 0
            }
            counter++ 
        }
        if (counter === 5) {
            console.log(`You can't save the money.`);
            console.log(dayCounter);
            break;
        } 
        if (money >= needMoney) {
            console.log(`You saved the money for ${dayCounter} days.`);
        }
    }      
}

vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])