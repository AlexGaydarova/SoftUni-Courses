function firm(input) {
    hours = Number(input[0]);
    days = Number(input[1]);
    workers = Number(input[2]);
    daysWorkHours = (days * 0.9) * 8;
    workMoreHours = (workers * days) * 2;
    totalWork = daysWorkHours + workMoreHours;
    if (hours <= totalWork) {
        hoursLeft = totalWork - hours;
        console.log(`Yes!${Math.floor(hoursLeft)} hours left.`);
    } else if (hours > totalWork) {
        hoursLess = hours - totalWork;
        console.log(`Not enough time!${Math.ceil(hoursLess)} hours needed.`);
    } 
}

firm(["90", "7", "3"]);
firm(["99", "3", "1"]);
