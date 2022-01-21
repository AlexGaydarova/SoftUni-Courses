function sumFirstLast(arr) {
    let first = Number(arr.shift());
    let last = Number(arr.pop());
    console.log(first + last);
}

sumFirstLast(['20', '30', '40']);