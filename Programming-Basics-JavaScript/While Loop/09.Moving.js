function moving(input) {
    let x = Number(input[0]); // широчина 
    let y = Number(input[1]); // височина
    let z = Number(input[2]); // дължина на свободното място - квартита
    let availableSpace = x*y*z;
    let index = 3; // броя кашони -  не знаем колко са. от 3 масив нагоре 
 
    while (input[index] != "Done") {
        availableSpace = availableSpace - Number(input[index]);
        if (availableSpace < 0) {
            console.log(`No more free space! You need ${availableSpace * -1} Cubic meters more.`);
            break;
        }
        index++;
    }
    if (availableSpace >= 0) {
        console.log(`${availableSpace} Cubic meters left.`);
    }
}

moving(["10", "10","2","20","20","20","20","122"]);