function fruitMarket(input) {
    let strawberryPrice = Number(input[0]);
    let bananasKg = Number(input[1]);
    let orangesKg = Number(input[2]);
    let raspberryKg = Number(input[3]);
    let strawberryKg = Number(input[4]);
    let raspberryPrice = strawberryPrice / 2;
    let orangesPrice = raspberryPrice - (raspberryPrice * 0.4);
    let bananasPrice = raspberryPrice - (raspberryPrice * 0.8);
    raspberrySum = raspberryKg * raspberryPrice;
    orangesSum = orangesKg * orangesPrice;
    bananaSum = bananasKg * bananasPrice;
    strawberrySum = strawberryKg * strawberryPrice;
    totalSum = raspberrySum + orangesSum + bananaSum + strawberrySum;
    console.log(totalSum);
}

fruitMarket(["48","10","3.3","6.5","1.7"]);
fruitMarket(["63.5","3.57","6.35","8.15","2.5"]);
// Цена на малините за килограм: 24лв. Цена на портокалитеза килограм: 24 – (0.4 * 24) = 14.4лв.
// Цена на бананите за килограм: 24 – (0.8 * 24) = 4.8лв. Сума за малините: 6.5 * 24 = 156лв.
// Сума за портокалите: 3.3 * 14.4 = 47.52лв. Сума за бананите: 4.8 * 10 = 48лв.
// Сума за ягодите: 1.7 * 48 = 81.6лв. Обща сума: 156 + 47.52 + 48+ 81.6= 333.12лв.
// цената на малините е наполовина по-ниска от тази на ягодите;
// цената на портокалитее с 40% по-ниска от цената на малините;
// цената на бананитее с 80% по-ниска от цената на малините.
