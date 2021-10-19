function poolDay(input) {
    let people = Number(input[0]);
    let taksaVhod = Number(input[1]);
    let cenaShezlong = Number(input[2]);
    let cenaChadyr = Number(input[3]);
    let totalTaksaVhod = people * taksaVhod;
    let totalShezlong = Math.ceil(0.75 * people) * cenaShezlong;
    let totalChadyr = Math.ceil(0.50 * people) * cenaChadyr;
    let totalSum = totalTaksaVhod + totalShezlong + totalChadyr;
    console.log(`${totalSum.toFixed(2)} lv.`);
}

poolDay(["21", "5.50", "4.40", "6.20"]);
poolDay(["50", "6", "8", "4"]);
poolDay(["100", "8", "6", "4"]);