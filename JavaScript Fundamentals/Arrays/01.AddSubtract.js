function addSubtract(input) {
    let array = [];
    let sumOriginal = 0;
    let sumNew = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 == 0) { 
            let currentNum = input[i] + i;
            array.push(currentNum);
            sumOriginal += input[i];
            sumNew += currentNum;

        } else {
            let currentNum = input[i] - i;
            array.push(currentNum);
            sumOriginal += input[i];
            sumNew += currentNum;
        }
    }
    console.log(array);
    console.log(sumOriginal);
    console.log(sumNew);
}
addSubtract([5, 15, 23, 56, 35]);