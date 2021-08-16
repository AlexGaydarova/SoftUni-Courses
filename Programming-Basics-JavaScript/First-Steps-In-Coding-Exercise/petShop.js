function petShop(input) {
    let dogsNum = Number(input[0]);
    let animalsNum = Number(input[1]);
    let dogFood = 2.50;
    let animalFood = 4;
    let sumDog = dogsNum * dogFood;
    let sumAnimal = animalsNum * animalFood;
    let totalSum = sumDog + sumAnimal;
    console.log(`${totalSum} lv.`);
}
petShop(["5", "4"]);
petShop(["13", "9"]);
