function birthdayParty(input){
    let rentRoom = Number(input[0]);
    let cake = rentRoom * 0.20;
    let drinks = cake * 0.55;
    let animator = rentRoom / 3;
    let totalSum = rentRoom + cake + drinks + animator;
    console.log(totalSum);
}
//cake – price is 20% from rent hall
//drinks – price is 45% less then the cake
//animator – the price is 1/3 from price of the hall
birthdayParty(["2250"]);
birthdayParty(["3720"]);