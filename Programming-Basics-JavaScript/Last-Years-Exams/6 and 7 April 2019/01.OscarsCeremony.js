function oscarsCeremony(input) {
    let rentRoom = Number(input[0]);
    let statuetki = rentRoom * 0.70;
    let keturing = statuetki * 0.85;
    let ozvuchavane = keturing / 2;
    let sum = rentRoom + statuetki + keturing + ozvuchavane;
    console.log(sum.toFixed(2));
}

oscarsCeremony(["3500"]);
oscarsCeremony(["5555"]);