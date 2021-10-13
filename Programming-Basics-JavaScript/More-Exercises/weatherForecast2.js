function weatherForecast(input) {
    let gradusi = Number(input[0]);
    if ((gradusi >= 5) && (gradusi <= 11.9 )) {
        console.log("Cold");
    } else if ((gradusi >= 12) && (gradusi <= 14.9)) {
        console.log("Cool");
    } else if ((gradusi >= 15) && (gradusi <= 20.00)) {
        console.log("Mild");
    } else if ((gradusi >= 20.1) && (gradusi <= 25.9)) {
        console.log("Warm");
    } else if ((gradusi >= 26.00) && (gradusi <= 35.00)) {
        console.log("Hot");
    } else {
        console.log("unknown");
    }
}
//26.00 - 35.00	Hot	   20.1 - 25.9	Warm	   
//15.00 - 20.00	Mild  12.00 - 14.9	Cool 5.00 - 11.9	Cold
//weatherForecast(["16.5"]);
//weatherForecast(["8"]);
//weatherForecast(["22.4"]);
//weatherForecast(["26"]);
weatherForecast(["0"]);