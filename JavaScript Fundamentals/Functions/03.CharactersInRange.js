function charactersInRange(first, second) {
let min = first.charCodeAt(0);
let max = second.charCodeAt(0);

let firstAsNum = first.charCodeAt(0);
let secondAsNum = second.charCodeAt(0);

if (firstAsNum > secondAsNum) {
    min = secondAsNum;
    max = firstAsNum;
}

    let result = '';
    for (let i = min + 1; i < max; i++) {
        let current = String.fromCharCode(i);
        result += `${current} `;
    }
     return result;
}

// charactersInRange('a','d');  РАБОТИ ЗА БУКВИ САМО ,НЕ ЗА СИМВОЛИ.
console.log(charactersInRange('C','#'));