function integerFloat(num1,num2,num3) {
    let sum = num1 + num2 + num3;
    sum % 1 === 0 ? sum += ' - Integer': sum += ' - Float';
    console.log(sum);
}

// integerFloat(9, 100, 1.1);
// integerFloat(100, 200, 303);

function intOrFloat(a,b,c) {
    let sum = a + b + c;
    //Number.isInteger(sum);
    let rounded = Math.round(sum);

    if (sum == rounded) { //((sum | 0) == sum) битови операции. 
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}

intOrFloat(9,100,1.1);