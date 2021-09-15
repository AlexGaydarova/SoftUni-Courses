function leapYears(input) {
    let leapYear = Number(input[0]);
    let someYear = Number(input[1]);
    for (let i = leapYear; i <= someYear; i += 4) {
        console.log(i);
    }  
}

leapYears(["1908", "1919"]);
