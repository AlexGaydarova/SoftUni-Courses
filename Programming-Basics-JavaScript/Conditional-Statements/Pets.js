function pets(input) {
    let numDays = Number(input[0]);
    let leftFoodKg = Number(input[1]);
    let dogFoodKgDay = Number(input[2]);
    let catFoodKgDay = Number(input[3]);
    let turtleFoodGrDay = Number(input[4]);
    let dogFood = numDays * dogFoodKgDay;
    let catFood = numDays * catFoodKgDay;
    let turtleFood = numDays * turtleFoodGrDay /1000;
    let needFoodKg = dogFood + catFood + turtleFood;
    if ( leftFoodKg >= needFoodKg) {
        moreFood = Math.floor(leftFoodKg - needFoodKg);
        console.log(`${moreFood} kilos of food left.`);
    } else {
        lessFood = Math.ceil(needFoodKg - leftFoodKg);
        console.log(`${lessFood} more kilos of food are needed.`);
    }
}

pets(["2", "10", "1", "1", "1200"]);
pets(["5", "10", "2.1", "0.8", "321"]);