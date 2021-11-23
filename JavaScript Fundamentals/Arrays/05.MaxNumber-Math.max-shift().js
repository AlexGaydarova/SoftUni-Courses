function maxNumber(arr) {
    let str = [];
    while (arr.length !== 0) {
        let current = arr.shift();
        let biggest = Math.max(...arr);
        if (current > biggest) {
            str.push(current);
        }
    }
    console.log(str.join(' '));
}

maxNumber([27 ,19 ,42 ,2 ,13 ,45 ,48]);

function maxNum(list) {
    let topInteger = [];

    for (let i = 0; i < list.length; i++) {
        let currentElement = list[i];
        let isTop = true;

        for (let j = i + 1; j < list.length; j++) {
            let rigthElement = list[j];

            if (rigthElement >= currentElement) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            topInteger.push(currentElement);
        }
    }
    console.log(topInteger.join(' '));
}
//maxNum([27 ,19 ,42 ,2 ,13 ,45 ,48]);