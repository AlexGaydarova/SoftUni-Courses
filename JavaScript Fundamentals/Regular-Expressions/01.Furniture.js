function furniture(input) {
    let regEx = />>(?<name>\w+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;      
    let names = [];
    let totalMoney = 0;

    for (let line of input) {
        if (line == 'Purchase') {
            break;
        }
            // let valid = line.match(regEx);
        let valid = regEx.exec(line);
        
        if (valid) { // if null не добавя нищо
            names.push(valid.groups.name);
            totalMoney += Number(valid.groups.qty) * Number(valid.groups.price);
        }
    }
    console.log("Bought furniture:");
    console.log(names.join('\n'));
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3', 
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);
