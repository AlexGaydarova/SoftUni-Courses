function evenOddSubtraction(arr) {
    let evenSum = 0;
    let oddSum = 0;
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        
        if (curr % 2 === 0) {
            evenSum += curr;
        } else {
            oddSum += curr;
        }
        total = evenSum - oddSum;
    }
    console.log(total);
}

evenOddSubtraction([1,2,3,4,5,6]);