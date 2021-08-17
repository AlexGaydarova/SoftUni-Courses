function transportPrice(input) {
    let km = Number(input[0]);
    let dayOrNight = input[1];
    if (km >= 100)  {
        train = km * 0.06;
        console.log(train.toFixed(2));
    } else if (km >= 20)  {
        bus = 0.09 * km;
        console.log(bus.toFixed(2));
    } else if ((km <= 20) && (dayOrNight == "day") ){
        taxiDay = 0.70 + (km * 0.79);
        console.log(taxiDay.toFixed(2));
    } else if ((km <= 20) && (dayOrNight == "night")) {
        taxiNight = 0.70 + (km * 0.90);
        console.log(taxiNight.toFixed(2));
    }
}
//Такси. Начална такса: 0.70 лв. Дневна тарифа: 0.79 лв. / км. Нощна тарифа: 0.90 лв. / км.
//Автобус. Дневна / нощна тарифа: 0.09 лв. / км. Може да се използва за разстояния минимум 20 км.
//Влак. Дневна / нощна тарифа: 0.06 лв. / км. Може да се използва за разстояния минимум 100 км.

//transportPrice(["5", "day"]);
//transportPrice(["7", "night"]);
//transportPrice(["25", "day"]);
transportPrice(["180", "night"]);


