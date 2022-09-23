function amazingNumbers(num) {
    num = num.toString();
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }

    let result = sum.toString().includes('9');
    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
}

// amazingNumbers(1233);



function amazing(num) {
    //find sum of digits
    let numAsStr = num.toString();
    let sum = 0;

    for (let i = 0; i < numAsStr.length; i++) {
        sum += Number(numAsStr[i]);
    }
    //check if sum conteins 9
    let sumAsString = sum.toString();
    let hasNine = false;

    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == '9') {
        hasNine = true;
        break;
        }
    }
 console.log(`${num} Amazing? ${hasNine ? 'True' : 'False'}`);
}
 


amazing(999);
