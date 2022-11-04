function palindromeIntegers(array) {
    for (let number of array) {
        let currentAsString = number.toString();
        let reverseNum = currentAsString.split('').reverse().join('');
       
        if (currentAsString === reverseNum) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromeIntegers([123,323,421,121]);


function palindromeIntegers(array) {
    for (let i = 0; i < array.length; i++) {
        let isEqual = false;
        let current = array[i];
        let currentAsString = current.toString();
        let sepNum = currentAsString.split('');
        let reverseNum = sepNum.reverse();
        let newNum = Number(reverseNum.join(''));

        if (current === newNum) {
            isEqual = true;
        }
        console.log(isEqual);
    }
}


function palidrome(arr) {
   palindromeIntegers(arr);
    console.log(palindromeIntegers);
}

//palidrome([32,2,232,1010]);