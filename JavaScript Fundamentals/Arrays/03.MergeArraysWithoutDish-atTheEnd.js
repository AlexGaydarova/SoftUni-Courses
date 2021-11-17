function mergeArrays(arr1,arr2) {
    let arr3 = '';

    for (let i = 0; i < arr1.length; i++) {
            if (i % 2 === 0) {
            let current = Number(arr1[i]) + Number(arr2[i]);
                if (i !== arr1.length - 1) {
                    arr3 += `${current} - `
                } else {
                    arr3 += current;
                }
            } else {
            current = arr1[i] + arr2[i];
                if (i !== arr1.length - 1) {
                    arr3 += `${current} - `
                } else {
                    arr3 += current;
                }
            } 
    }
    console.log(arr3);
}

// mergeArrays(['5', '15', '23', '56', '35'],
// ['17', '22', '87', '36', '11']);

function merge(firstList, secondList) {
    result = [];

    for (let i = 0; i <firstList.length; i++) {
        let firstListElement = firstList[i];
        let secondListElement = secondList[i];

        if (i % 2 === 0) {
            let sum = Number(firstListElement) + Number(secondListElement);
            result.push(sum);
        } else {
            let concat = firstListElement + secondListElement;
            result.push(concat);
        }
    }
    let resultAsString = result.join(' - ');
    console.log(resultAsString);
}

merge(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);