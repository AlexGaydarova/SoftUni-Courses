function fuelMoney(distance,passengers,price) {
    let needFuel = (distance / 100) * 7;
    needFuel += passengers * 0.100;
    let money = needFuel * price;
    console.log(`Needed money for that trip is ${money}lv.`)
}

fuelMoney(260, 9, 2.49);

