function trainTheTrainers(input) {
    let index = 0;
    let n = Number(input[index]) //броят хора в журито.
    index++
    let comand = input[index]; // Finish или името на презентацията/.
    index++
    let counter = 0;
    let avgGrade = 0
    while (comand != "Finish") {
        counter++; // броят презентаци.
        let presentationName = comand;
        let tempAvgGrade = 0
        for (i = 0; i < n ; i++) { // ще поучаваме н - на брой оценки.
            let tempGrade = Number(input[index]);
            index++;
            tempAvgGrade += tempGrade;
        }
        tempAvgGrade = tempAvgGrade / n;
        console.log(`${presentationName} - ${tempAvgGrade.toFixed(2)}.`);

        avgGrade += tempAvgGrade;
        comand = input[index];
        index++;
    }
    avgGrade = avgGrade / counter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}

trainTheTrainers(["2","While-Loop","6.00","5.50","For-Loop","5.84","5.66","Finish"]);