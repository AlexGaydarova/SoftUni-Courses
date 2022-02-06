function sortingBigSmall(num) {
    let newArr = []; // създаваме си нов масив.
    while (num.length != 0) {
        let biggest = Math.max(...num); // намираме най-голямото число в масива
        let indexBig = num.indexOf(biggest); // намираме на кой индекс се намира.
        let delBig = num.splice(indexBig,1); // изрязваме го от масива.

        let smallest = Math.min(...num) // намираме най-малкото число.
        let indexSmall = num.indexOf(smallest); // намираме на кой индекс е.
        let delSmall = num.splice(indexSmall,1); // изрязваме го от масива.

        newArr.push(delBig); // добавяме най-голямото текущо число в новия масив.
        newArr.push(delSmall); // добавяме най-малкото текущо число в новия масив.
    }
    console.log(newArr.join(' '));
}

//sortingBigSmall([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

function sorting(array) {
    let sortNums = [];
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        let number;
        if (i % 2 === 0) {
            number = Math.max(...array);
        } else {
            number = Math.min(...array);
        }
        sortNums.push(number);
        array.splice(array.indexOf(number), 1);
    }
    return sortNums.join(' ');
}

console.log(sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));
