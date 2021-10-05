function accountBalance(input) {
    let deposit = input[0];
    let total = 0;
    let index = 1;
    while (deposit !== "NoMoreMoney") {
       let amount = Number(deposit);
       if (amount < 0) { 
           console.log("Invalid operation!");
           break;
     }
       total += amount;
       console.log(`Increase: ${amount.toFixed(2)}`);
       deposit = input[index];      
       index++; 
    }
    console.log(`Total: ${total.toFixed(2)}`);
 }
 
 //accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
 accountBalance(["120", "45.55", "-150"]);