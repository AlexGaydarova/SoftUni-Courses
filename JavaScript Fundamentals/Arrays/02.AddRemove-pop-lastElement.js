function addAndRemove(array) {
    let numArray = [];
    let number = 1;
    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        if (command === 'add') {
            numArray.push(number);
        } else if (command === 'remove') {
            numArray.pop(); // премахва последния елемент от масива.
        } 
        number++;
    }
    if (numArray.length > 0) { // има елементи.
        console.log(numArray.join(' '));
    } else { // ако няма елементи
        console.log('Empty');
    }
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);