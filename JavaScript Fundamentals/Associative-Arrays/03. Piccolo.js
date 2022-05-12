function piccolo(arr) {
    let cars = [];
 
    for (let carDetails of arr) {
       let [direction, number] = carDetails.split(', ');
       if (direction === 'IN') {
            if (!cars.includes(number)){ // if doesnt exist then add.
                cars.push(number);
            }
       } else if (direction === 'OUT') {
           if (cars.includes(number)) { // if exists
            let index = cars.indexOf(number);
            cars.splice(index, 1);
           }
       }
    }
    let sorted = cars.sort((a, b) => a.localeCompare(b));

    if (sorted.length > 0) {
        console.log(sorted.join('\n')); 
    } else {
        console.log('Parking Lot is Empty');
    }   
  }




piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);
