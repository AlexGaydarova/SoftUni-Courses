function trainingLab(input) {
    let w = Number(input[0]); // дължина
    let h = Number(input[1]); // широчина
    if(3 <= h <= w <= 100) {
    let totalHSets = (((h * 100) - 100) / 70).toFixed(0);
    let totalWSets = Math.floor(w * 100 / 120);
    let numberSets = (totalHSets * totalWSets) - 3; //3 места за катедра и входна врата
    console.log(numberSets.toFixed(0)); //броят места в учебната зала
    }
}
// Едно работно място заема 70 на 120 cm 
//Залата е широка 890 cm. От тях 100 cm отиват за коридора в средата.
//В останалите 790 cm могат да се разположат по 11 бюра на ред 
//(11 * 70 cm = 770 cm + 20 cm остатък).
//.Залата е дълга 1500 cm. В тях могат да бъдат 
//разположени 12 реда (12 * 120 cm = 1440 + 60 cm остатък).
//Брой места = 12 * 11 - 3 =  132 - 3 = 129 
trainingLab(["15","8.9"]);
trainingLab(["8.4","5.2"]);

