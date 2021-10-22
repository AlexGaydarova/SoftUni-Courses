function movieProfit(input) {
    let movieName = input[0];
    let numDays = Number(input[1]);
    let numBileti = Number(input[2]);
    let priceBilet = Number(input[3]);
    let procentKino = Number(input[4]);
    let biletiDen = numBileti * priceBilet;
    let prihodi = numDays * biletiDen;
    let procentKinoLv = prihodi * procentKino / 100;
    let totalPrihodi = prihodi - procentKinoLv;
    console.log(`The profit from the movie ${movieName} is ${totalPrihodi.toFixed(2)} lv.`);
}

movieProfit(["The Programmer", "20", "500", "7.50", "7"]);
movieProfit(["Python Basics", "40", "34785", "10.45", "14"]);
movieProfit(["The Jungle", "22", "20500", "9.37", "30"]);