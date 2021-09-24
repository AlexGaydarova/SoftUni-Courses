function equalPairs (input) {
    let countCouples = Number(input[0]);
    let first = Number(input[1]);
    let second = Number(input[2]);
    let total = first + second;
    let maxDiff = 0; // двойките са равни (1+2) = (3 + 0) => 3-3 = 0
   
    for (let i = 3; i <= countCouples * 2; i += 2) {
      first = Number(input[i]);
      second = Number(input[i + 1]);
      let currentTotal = first + second;
      let currentDiff = Math.abs(currentTotal - total);
      if (currentDiff > maxDiff) {
        maxDiff = currentDiff;
      }
      total = currentTotal;
    }
   
   if (maxDiff == 0)  {
    console.log(`Yes, value=${total}`);
   } else {
    console.log(`No, maxdiff=${maxDiff}`);
   }
  }

equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);