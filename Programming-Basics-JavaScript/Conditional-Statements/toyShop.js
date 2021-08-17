function toyShop(array) {
    let tripPrice = Number(array[0]);
    let puzelBr = Number(array[1]);
    let dollBr = Number(array[2]);
    let bearBr = Number(array[3]);
    let minionBr = Number(array[4]);
    let truckBr = Number(array[5]);
    let sumToys = (puzelBr * 2.60) + (dollBr * 3) + (bearBr * 4.10) + (minionBr * 8.20) + (truckBr * 2);
    let countToys = puzelBr + dollBr + bearBr + minionBr + truckBr;
    if (countToys >= 50 ) {
        sumToys = sumToys - (0.25 * sumToys);
    }
    let income = sumToys - (sumToys * 0.10);
    if (income >= tripPrice) {
        console.log(`Yes! ${(income - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - income).toFixed(2)} lv needed.`);
    }
}

toyShop(["320", "8", "2", "5", "5", "1"]);
toyShop(["40.8", "20", "25", "30", "50", "10"]);

//Цени Пъзел - 2.60 лв.Говореща кукла - 3 лв.Плюшено мече - 4.10 лв.Миньон - 8.20 лв.Камионче - 2 лв.
// "Yes! {оставащите пари} lvleft."
// "Not enough money! {недостигащите пари} lv needed."
//втория знак след десетичната запетая. 
//Ако играчките са 50 или повече отстъпка 25%от общата цена.
//10% за наема на магазина.
//Сума: 20 * 2.60 + 25 * 3 + 30 * 4.10 + 50 * 8.20 + 10 * 2 = 680лв.
//135 > 50 => 25% отстъпка; 25% от 680 = 170 лв. отстъпка
//Крайна цена: 680 – 170 = 510 лв. Наем: 10% от 510 лв. = 51лв.
//Печалба: 510 – 51 = 459 лв. 459 > 40.8 =>459 – 40.8= 418.20 лв. остават
