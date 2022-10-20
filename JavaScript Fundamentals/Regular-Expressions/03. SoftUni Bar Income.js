function softUniBar(input) {
    let valid = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^|$%.]*?(?<price>[0-9]+\.?[0-9]*)\$/gm;
    let totalPrice = 0;
    let totalIncome = 0;
    for (let line of input) {
        if (line == 'end of shift') {
            break;
        }

        let match = valid.exec(line); // arr with valid matches

        if (match) { // is match is not empty
            let customer = match[1];
            let product = match[2];
            totalPrice =  Number(match[3]) * Number(match[4]);
            totalIncome += totalPrice;

            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
        }  
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBar(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
   ' %Maria%<Cola>|1|2.4$',
    'end of shift']);

// softUniBar(['%InvalidName%<Croissant>|2|10.3$',
//    '%Peter%<Gum>1.3$',
//     '%Maria%<Cola>|1|2.4',
//     '%Valid%<Valid>valid|10|valid20$',
//     'end of shift']);


    function solve(arr) { 
        arr.pop();
        let totalIncome = 0;
        arr.forEach((line) => {
            let pattern = /%([A-Z][a-z]+)%[^|$%.]*<(\w+)>[^|$%.]*\|([0-9]+)\|[^|$%.]*?([0-9]+\.?[0-9]*)\$/gm; 
            let result = pattern.exec(line);
        if (result) {
            let currentSum = Number(result[3]) * Number(result[4]);
            console.log(`${result[1]}: ${result[2]} - ${currentSum.toFixed(2)}`);
            totalIncome += currentSum;
        }        
        });
        console.log(`Total income: ${totalIncome.toFixed(2)}`); 
    }