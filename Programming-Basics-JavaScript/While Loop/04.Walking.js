function walking(input) {
    let index = 0;
    let sumSteps = 0;
    let comand = input[index];
    index++;

    while (sumSteps <= 10000) {
        if (comand === "Going home") {
        sumSteps += Number(input[index]);
        index++;
        break;
        } 
        let tempStep = Number(comand);
        sumSteps += tempStep;

        comand = input[index];
        index++;
        }
        if (sumSteps < 10000) {
            console.log(`${10000 - sumSteps} more steps to reach goal.`);
        } else if (sumSteps >= 10000) {
            console.log(`Goal reached! Good job!`);
            console.log(`${sumSteps - 10000} steps over the goal!`);
         }
  }
  
//walking(["1000","1500","2000","6500"]);
walking(["1500","300","2500","3000","Going home","200"]);
