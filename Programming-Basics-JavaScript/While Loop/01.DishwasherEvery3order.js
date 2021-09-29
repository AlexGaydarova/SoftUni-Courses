function dishwasher(input) {
    let index = 0;
    let countBottles = Number(input[index]);
    index++;
    let comand = input[index];
    index++;
    let detergentNeed = 0;
    let detergentAvailable = countBottles * 750;
   //за 1 чиния са нужни 5 мл., а за тенджера 15 мл.  
   //на всяко трето зареждане само тенджери, а останалите с чинии. 
   let countDishes = 0;
   let countPots = 0;
   let counter = 0; // всеки 3ти съд. 
   let sum = 0;
    while (comand !== "End") { 
        let tempDetergent = Number(comand);
        if (detergentAvailable < sum) {
            break;
        }
        counter++;
        if (counter % 3 == 0) {
            detergentNeed = tempDetergent * 15;
            countPots += tempDetergent;
        } else {
           detergentNeed = tempDetergent * 5;
           countDishes += tempDetergent;
        }
        sum += detergentNeed;
        comand = input[index];
        index++;  
    }
    if (sum > detergentAvailable) {
       console.log(`Not enough detergent, ${sum - detergentAvailable} ml. more necessary!`);
   } else if (sum <= detergentAvailable) {
       console.log(`Detergent was enough!`);
       console.log(`${countDishes} dishes and ${countPots} pots were washed.`);
       console.log(`Leftover detergent ${detergentAvailable - sum} ml.`);
   }
   }

//dishwasher(["2","53","65","55","End"]);
dishwasher(["1","10","15","10","12", "13", "30"]);
