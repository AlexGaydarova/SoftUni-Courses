function spiceFlow(startingYield) {
    let countDay = 0;
    let totalSpice = 0;
    while (startingYield >= 100) {
        countDay++;
        totalSpice += startingYield - 26;
        startingYield -= 10;
    }
    totalSpice -= 26;

    if (totalSpice < 0) { // workers cannot consume more spice than there is in storage.
        totalSpice = 0;
    }
    console.log(countDay);
    console.log(totalSpice);
}

spiceFlow(111);


