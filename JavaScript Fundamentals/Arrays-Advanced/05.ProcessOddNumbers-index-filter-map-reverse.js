function processOddNumbers(n) {
   return n
    .filter((x, i) => i % 2 == 1)
    .map(x => x * 2)
    .reverse()
    .join(' ');

}   

// console.log(processOddNumbers([10, 15, 20, 25]));


function solve(arr) {
let result = arr.reduce((a,b) => (a + b / arr.length),0);
console.log(result);
}

// solve([1,2,3,4]);


