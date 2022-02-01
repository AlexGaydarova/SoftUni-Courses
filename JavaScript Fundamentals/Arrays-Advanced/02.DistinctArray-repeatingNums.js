function distinctArray(array) {
    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let next = array[j];

            if (next === current) {
                array.splice(j,1);
                i=0;
            }
        }
    }
    console.log(array.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
