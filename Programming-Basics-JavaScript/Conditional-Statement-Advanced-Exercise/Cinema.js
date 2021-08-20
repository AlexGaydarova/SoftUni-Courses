function cinema(input) {
    let typeProjection = input[0];
    let countOrder = Number(input[1]);
    let countColumn = Number(input[2]);
    let income = 0;
    if (typeProjection == "Premiere") {
        income = countOrder * countColumn * 12.00;
    } else if (typeProjection == "Normal") {
        income = countOrder * countColumn * 7.50;
    } else if ( typeProjection == "Discount") {
        income = countOrder * countColumn * 5.00;
    }
    console.log(income.toFixed(2));
}

cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);