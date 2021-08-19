function tradeCommissions(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let commission = 0;
    if (sales >= 0 && sales <= 500) {
        if ( city == "Sofia") {
            commission = 0.05 * sales;
        } else if (city == "Varna") {
            commission = 0.045 * sales;
        } else if (city == "Plovdiv") {
            commission = 0.055 * sales;
        } 
    }
    if (sales > 500 && sales <= 1000) {
        if ( city == "Sofia") {
            commission = 0.07 * sales;
        } else if (city == "Varna") {
            commission = 0.075 * sales;
        } else if (city == "Plovdiv") {
            commission = 0.08 * sales;
        } 
    }
    if (sales > 1000 && sales <= 10000) {
        if ( city == "Sofia") {
            commission = 0.08 * sales;
        } else if (city == "Varna") {
            commission = 0.10 * sales;
        } else if (city == "Plovdiv") {
            commission = 0.12 * sales;
        } 
    }
    if (sales > 10000) {
        if ( city == "Sofia") {
            commission = 0.12 * sales;
        } else if (city == "Varna") {
            commission = 0.13 * sales;
        } else if (city == "Plovdiv") {
            commission = 0.145 * sales;
        } 
    }
    if (sales < 0 || (!(city == "Sofia" || city == "Varna" || city == "Plovdiv"))) {
        console.log("error");
    } else {
        console.log(commission.toFixed(2));
    }
}
//tradeCommissions(["Sofia","1500"]);
tradeCommissions(["Plovdiv","499.99"]);