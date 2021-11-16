function rotateArray(arr) {
    let nRotations = Number(arr[arr.length - 1]); // числото  от последния елемент.
    arr.pop(); // махаме последния елемент.
    for (let i = 0; i < nRotations; i++) {
        let current = arr.pop() //махаме последния елемент.
        arr.unshift(current); // слагаме го отпред.
    }
    console.log(arr.join(' ')); 
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);