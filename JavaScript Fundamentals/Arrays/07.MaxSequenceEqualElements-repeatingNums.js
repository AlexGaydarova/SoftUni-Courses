function maxSequence(arr) {
    let longestSequence = [];
    let leftMostIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentEl = Number(arr[i]);
        let currentSequence = [currentEl];
        for (let j = i + 1; j < arr.length; j++) { //за следващия елемент.
            let nextEl = Number(arr[j]);
            if (nextEl === currentEl) { // ако са равни го добави в настоящия масив.
                currentSequence.push(nextEl)
            } else { // ако не са - прекъсни, излез от този цикъл.Продължи нататък.
                break;
            }
        }
        if (currentSequence.length > longestSequence.length) {
            longestSequence = []; // ЗАНУЛЯВА МАСИВА.
            for (let j = 0; j < currentSequence.length; j++) {
                longestSequence.push(currentSequence[j]);
            }
        } else if (currentSequence.length === longestSequence.length) {
            if (i < leftMostIndex) {
                leftmostIndex = i;
            }
        }
    }
    console.log(longestSequence.join(' '));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);