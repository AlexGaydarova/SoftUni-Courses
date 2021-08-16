function totalCena(input) {
    let km = Number(input[0]);
    let cenaGorivo = Number(input[1]);
    let razhodGolf = Number (input[2]);
    let totalCena = (((razhodGolf / 100) * km) * cenaGorivo);
    console.log(totalCena.toFixed(2));
}

totalCena(["200","2.3","5.5"]);
