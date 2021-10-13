function vegetableMarket(input) {
    let priceKgVeg = Number(input[0]);
    let priceKgFruit = Number(input[1]);
    let kgVeg = Number(input[2]);
    let kgFruit = Number(input[3]);
    let total = ((priceKgVeg * kgVeg) + (priceKgFruit * kgFruit)) / 1.94; 
    //едно евро е равно на 1.94лв
    console.log(total.toFixed(2)); //приходите от всички плодове и зеленчуци в евро.
    //Резултата да се форматира до втория знак след десетичния разделител
}
vegetableMarket(["0.194", "19.4", "10", "10"]);
vegetableMarket(["1.5", "2.5", "10", "10"]);
//Зеленчуците струват – 0.194лв. * 10кг. = 1.94лв.
//Плодовете струват – 19.4лв. * 10кг.  = 194лв.
//Общо – 195.94лв. = 101евро