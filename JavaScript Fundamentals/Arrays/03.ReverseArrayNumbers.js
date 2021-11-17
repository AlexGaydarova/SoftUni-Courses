function reverseArrayNumbers(n, input) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(input[i]);
    }
    let output = '';
    for (let j = array.length - 1; j >= 0; j--) {
        output += ` ${input[j]}`;
    }
    console.log(output);
}

//reverseArrayNumbers(3, [10, 20, 30]);

function reverse1(n,array) {

    let result = [];
    for  (let i = n - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    console.log(result.join(' '));
}
reverse1(3, [10, 20, 30]);

function reverse(n,array) {
    let sliceArray = [];
    for (let i = 0; i < n; i++) {
        sliceArray.push(array[i]);
    }
    let result = [];
    for  (let j = sliceArray.length - 1; j >= 0; j--) {
        result.push(sliceArray[j]);
    }
    console.log(result.join(' '));
}

//reverse(3, [10, 20, 30]);