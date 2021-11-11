function printnElement(arr) {
    let newArr = [];
    let step = Number(arr[arr.length - 1]) // числевата стойност на последния елемент.
    for (let i = 0; i < arr.length - 1 ; i += step) { // въртим цикъла до предпоследния елемент.
        newArr.push(arr[i]);
    }
    console.log(newArr.join(' '));
}

printnElement(['5', '20', '31', '4', '20', '2']);