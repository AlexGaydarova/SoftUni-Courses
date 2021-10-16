function christmasGifts(input) {
    let index = 0;
    let counter1 = 0;
    let counter2 = 0;
    let giftAdult = 0
    let giftKid = 0;
    
    while (true){
        if (input[index] == "Christmas") {
            break;
        }
        if (input[index] > 16) {
            giftAdult += 15;
            counter1++;
        } else {
            giftKid += 5;
            counter2++;
        }
        index++;
    }
console.log(`Number of adults: ${counter1}`);
console.log(`Number of kids: ${counter2}`);
console.log(`Money for toys: ${giftKid}`);
console.log(`Money for sweaters: ${giftAdult}`);
}

christmasGifts(["16",
"20",
"46",
"12",
"8",
"20",
"49",
"Christmas"])