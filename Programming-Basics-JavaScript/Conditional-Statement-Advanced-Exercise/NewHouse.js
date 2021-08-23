function newHouse(input) {
    let typeFlower = input[0];
    let countFlower = Number(input[1]);
    let budget = Number(input[2]);
    let totalFlower = 0;
    //Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
    switch (typeFlower) {
        case "Roses":
            totalFlower = countFlower * 5;
            break;
        case "Dahlias":
            totalFlower = countFlower * 3.8;
            break;
        case "Tulips":
            totalFlower = countFlower * 2.8;
            break;
        case "Narcissus":
            totalFlower = countFlower * 3;
            break;
        case "Gladiolus":
            totalFlower = countFlower * 2.5;
            break;
    }
    if (typeFlower =="Roses" && countFlower > 80) {
        totalFlower = totalFlower * 0.90; //10% discount
    } else if (typeFlower =="Dahlias" && countFlower > 90) {
        totalFlower = totalFlower * 0.85;
    } else if (typeFlower =="Tulips" && countFlower > 80) {
        totalFlower = totalFlower * 0.85;
    } else if (typeFlower == "Narcissus" && countFlower < 120) {
        totalFlower = totalFlower * 1.15;
    } else if (typeFlower == "Gladiolus" && countFlower < 80) {
        totalFlower = totalFlower * 1.20;
    }
    if (budget >= totalFlower) {
        diff = budget - totalFlower;
        console.log(`Hey, you have a great garden with ${countFlower} ${typeFlower} and ${diff.toFixed(2)} leva left.`);
    } else {
        diff = Math.abs(budget - totalFlower);
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}

newHouse(["Roses","55","250"]);
newHouse(["Tulips","88","260"]);
newHouse(["Narcissus","119","360"]);
