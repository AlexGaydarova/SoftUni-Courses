function grades(input) {
    let students = Number(input[0]);
    let gradeStudents = Number(input[1]);
    let sumGrade = 0;
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;
for (let i = 1; i <= students; i++) {
    gradeStudents = Number(input[i]);
    sumGrade += Number(input[i]);

    if (gradeStudents >= 5.00) {
        counter1++
    } else if (gradeStudents >= 4) {
        counter2++
    } else if (gradeStudents >= 3) {
        counter3++
    } else if (gradeStudents >= 2) {
        counter4++
    }       
  }
  let topStudents = counter1 / students * 100;
  let goodStudents = counter2 / students * 100;
  let thirdStudents = counter3 / students * 100;
  let badStudents = counter4 / students * 100;
  let averageGrade = sumGrade / students;

  console.log(`Top students: ${topStudents.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${goodStudents.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${thirdStudents.toFixed(2)}%`);
  console.log(`Fail: ${badStudents.toFixed(2)}%`);
  console.log(`Average: ${averageGrade.toFixed(2)}`);
}

grades(["6","2", "3", "4", "5", "6", "2.2"]);