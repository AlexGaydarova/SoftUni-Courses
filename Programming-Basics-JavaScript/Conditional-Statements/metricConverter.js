function metricConverter(input) {
    let num = Number(input[0]);
    let firstUnit= input[1];
    let secondUnit = input[2];
    if ((firstUnit == "m") && (secondUnit == "mm")) {
        num = num * 1000;
    } else if (( firstUnit == "mm") && (secondUnit == "m")) {
        num = num / 1000;
    } else if ((firstUnit == "m") && (secondUnit == "cm")) {
        num = num * 100;
    } else if ((firstUnit == "cm") && (secondUnit == "m")) {
        num = num / 100;
    } else if ((firstUnit == "cm") && (secondUnit == "mm")) {
        num = num * 10;
    } else if ((firstUnit == "mm") && (secondUnit == "cm")) {
        num = num / 10;
    }
    console.log(num.toFixed(3));
}

metricConverter(["12", "mm", "m"]);
metricConverter(["150", "m", "cm"]);
metricConverter(["45", "cm", "mm"]);
