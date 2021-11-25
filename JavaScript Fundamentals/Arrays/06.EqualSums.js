function equalSums(arr) { 
        let result = 'no'; 
        for (let i = 0; i < arr.length ; i++) { 
            let leftSum = 0;
            let rightSum = 0; 
            for (let j = 0; j < i; j++) {
                leftSum += arr[j]; // от 0 до i
            } 
            for (let k = arr.length - 1; k > i; k--) {
                rightSum += arr[k]; // от последния ел. до i 
            } 
            if (leftSum === rightSum){
                result = i;
                break;
            }
        } 
        console.log(result);
    }

//equalSums([1, 2, 3, 3]);

function equalSum(list) {
    let hasFoundResult = false;

    for (let i = 0; i < list.length; i++) {
        let leftSum = 0;
        let rigthSum = 0;

        //calculating leftSum
        for (let leftIdx = 0 ; leftIdx < i; leftIdx++) { // от 0 до i
            let currentNumber = list[leftIdx];
            leftSum += currentNumber;
        }
        //calculating rightSum
        for (let rightIdx = i + 1; rightIdx < list.length; rightIdx++) { //  от следващия на i до края
            let currentNumber = list[rightIdx];
            rigthSum += currentNumber;
        }
        //check if equal
        if (leftSum === rigthSum) {
            //print i and end program
            console.log(i);
            hasFoundResult = true;
            break;
        }
    }
    if (!hasFoundResult) {
        console.log('no');
    }
}

equalSum([1, 2, 3, 3]);

