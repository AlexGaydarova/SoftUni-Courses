function invalidNumber(input) {
    let num = Number(input[0]);
    if (!(num >= 100 && num <= 200 || num == 0)) {
        console.log("invalid");
    }
}

//invalidNumber(["150"]);
//invalidNumber(["220"]);
//invalidNumber(["199"]);
//invalidNumber(["0"]);
invalidNumber(["-5"]);