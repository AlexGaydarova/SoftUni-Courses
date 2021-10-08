function graduationPt2(input) {
    let name = input[0];
    let gradeCount = 1;
    let sum = 0;
    let failCount = 0;
    let year = 1; //index
    
    while (year <= 12) {
        let currentGrade = Number(input[year]);
        year++;
        if (currentGrade >= 4) {
            gradeCount++;
            sum += currentGrade;
        } else {
            failCount++;
            if (failCount > 1) {
                console.log(`${name} has been excluded at ${gradeCount} grade`);
                break;
            }
        }
    }
    if (gradeCount >= 12) {
        let average = sum / 12;
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }
}

graduationPt2(["Mimi", 
"5",
"6",
"2",
"3"])