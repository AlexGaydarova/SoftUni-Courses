function projectsCreation(input) {
    let architectName = input[0];
    let projectNum = Number(input[1]);
    let hours = 3;
    let totalHours = projectNum * hours; 
    console.log(`The architect ${architectName} will need ${totalHours} hours to complete ${projectNum} project/s.`);
}
projectsCreation(["George","4"]);
projectsCreation(["Sanya","9"]);

