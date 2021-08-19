function tradeCommissions(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let commission = 0;
    let isError = false;
    if (sales <= 0) {
        console.log("error");
    } else {
    switch (city) {
        case "Sofia":
            if (sales >= 0 && sales <= 500) {
                commission = 0.05 * sales;
            } else if (sales > 500 && sales <= 1000) {
                commission = 0.07 * sales;
            } else if (sales > 1000 && sales <= 10000) {
                commission = 0.08 * sales;
            } else {
                commission = 0.12 * sales;
            }
            break;
        case "Varna":
            if (sales >= 0 && sales <= 500) {
                commission = 0.045 * sales;
            } else if (sales > 500 && sales <= 1000) {
                commission = 0.075 * sales;
            } else if (sales > 1000 && sales <= 10000) {
                commission = 0.10 * sales;
            } else {
                commission = 0.13 * sales;
            }
            break;
        case "Plovdiv":
            if (sales >= 0 && sales <= 500) {
                commission = 0.055 * sales;
            } else if (sales >= 500 && sales <= 1000) {
                commission = 0.08 * sales;
            } else if (sales >= 1000 && sales <= 10000) {
                commission = 0.12 * sales;
            } else {
                commission = 0.145 * sales;
            }
            break;
                default:
                    isError = true;
                    break;      
            }
            if (isError) {
                console.log("error");
            } else {
                console.log(commission.toFixed(2));
            }
        }
    }

tradeCommissions(["Varna","3874.50"]);
