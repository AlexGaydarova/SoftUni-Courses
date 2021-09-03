function traveling(input) {
    let currentDestination = "";
    let destinationPrice = 0;
    for (let i = 0; i < input.length; i++) { //да преминава през масива. 
        if (input[i] == "End") {
            break;
        }
        currentDestination = input[i];
        i++;
        destinationPrice = Number(input[i]);
        let totalSavings = 0;
        while (totalSavings < destinationPrice) {
            i++;
            totalSavings += Number(input[i]);
        }
        console.log(`Going to ${currentDestination}!`);
    }
}

traveling(["Greece","1000","200","200","300","100","150","240",
"Spain","1200","300","500","193","423","End"]);
