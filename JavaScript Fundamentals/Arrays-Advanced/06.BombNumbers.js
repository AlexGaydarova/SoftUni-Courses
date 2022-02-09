function bomb(seqNum, bombNum) {
    let specialNum = bombNum[0];
    let countIndex = bombNum[1];
    for (let i = 0; i < seqNum.length; i++) {
        if (seqNum[i] == specialNum) {
        let index = seqNum.indexOf(seqNum[i]);
        let elementsToRemove = countIndex * 2 + 1;
        let startIndex = index - countIndex;
            if (startIndex < 0) {
                elementsToRemove += startIndex;
                startIndex = 0;
            }
            
            seqNum.splice(startIndex, elementsToRemove);
            i = 0;
        }
    }
    let sum = 0;
    for (let num of seqNum) {
        sum += num;
    }
    console.log(sum);
}

bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]);


function bombNumbers(sequence, bomb) {
    let specialNumber = bomb[0];
    let bombPower = bomb[1];
 
    while (sequence.includes(specialNumber)) {
        let index = sequence.indexOf(specialNumber);
        let elementsToRemove = bombPower * 2 + 1;
        let startIndex = index - bombPower;
 
        if (startIndex < 0) {
            elementsToRemove += startIndex;
            startIndex = 0;
        }
        sequence.splice(startIndex, elementsToRemove);
    }
    console.log(sequence.reduce((a, b) => a + b, 0));
}

    bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
        [2, 1]);