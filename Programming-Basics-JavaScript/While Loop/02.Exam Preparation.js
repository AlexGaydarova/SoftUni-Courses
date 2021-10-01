function examPreparation(input) {
    let index = 0;
    let countBadGrades = Number(input[index]);
    index++;
    let nameExercise = input[index];
    let counterBad = 0;
    let counterGood = 0;
    let sumGrades = 0;
    let lastExercise = "";
    
    while (counterBad < countBadGrades) {
        nameExercise = input[index];
        index++;
        let tempGrade = Number(input[index]);
        index++;
        if (nameExercise == "Enough") {
            let totalCounter = counterGood + counterBad;
            let avarage = sumGrades / totalCounter;
            console.log(`Average score: ${avarage.toFixed(2)}`);
            console.log(`Number of problems: ${totalCounter}`);
            console.log(`Last problem: ${lastExercise}`);
            break;
            }
        if (tempGrade <= 4) {
            counterBad++;
        } else {
            counterGood++;
        }
        sumGrades += tempGrade;
        lastExercise = nameExercise;
        if (counterBad >= countBadGrades) {
            console.log(`You need a break, ${counterBad} poor grades.`);
            break;
        }
    }
}

examPreparation(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"]);
//examPreparation(["2","Income","3","Game Info","6","Best Player","4"]);