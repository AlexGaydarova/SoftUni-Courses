function changeBureau(input) {
    let bitcoinNum = Number(input[0]);
    let chaniseNum = Number(input[1]);
    let comission = Number(input[2]);
    let bitcoinKurs = 1168; //1 биткойн = 1168 лева
    let chaniseKurs = 0.15; //1 китайски юан = 0.15 долара.
    let dolar = 1.76; // 1 долар = 1.76 лева.
    let euro = 1.95; //1 евро = 1.95 лева.
    let sumLeva = (bitcoinNum * bitcoinKurs) + ((chaniseNum * chaniseKurs) * dolar);
    //let sumBitcoin = bitcoinNum * bitcoinKurs;
    //let sumChanise = chaniseNum * chaniseKurs;
    // let sumDolar = sumChanise * dolar;
    // let sumLeva = sumBitcoin + sumDolar;
    let euroSum = sumLeva / euro;
    let comissionEuro = (comission * 0.01) * euroSum;
    let totalEuro = euroSum - comissionEuro;
//1 биткойн = 1168 лева , 5 юана = 0.75 долара ,0.75 долара = 1.32 лева
//1168 + 1.32 = 1169.32 лева = 599.651282051282 евро
//Комисионна: 5% от 599.651282051282 = 29.9825641025641
//Резултат: 599.651282051282 - 29.9825641025641 = 569.668717948718
//евро ~ 569.67  
//console.log(totalEuro.toFixed(2));
console.log(totalEuro.toFixed(2));
}

changeBureau(["1","5","5"]);
changeBureau(["20","5678","2.4"]);



