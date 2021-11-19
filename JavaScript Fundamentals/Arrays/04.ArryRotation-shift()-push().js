function arrayRotation(array,n) {
    for (let i = 0; i < n; i++) {
            let current = array.shift();
            array.push(current); 
    }   
    console.log(array.join(' '));
}

arrayRotation([2, 4, 15, 31], 5);

function arrayRot(list,nRotaion) {
    for (let i = 0; i < nRotaion; i++) {
        let firstElement = list[0];

        for (let j = 0; j < list.length - 1; j++) {
            list[j] = list[j + 1];
        }
        let lastIndex = list.length - 1;
        list[lastIndex] = firstElement;
    }
    console.log(list.join(' '));
}

//arrayRot([2, 4, 15, 31], 5);