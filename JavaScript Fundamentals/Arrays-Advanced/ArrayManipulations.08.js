function arrayManipulations(arr) {
    let array = arr.shift().split(' ').map(Number);
    
    while (arr != 0) {
        let commands = arr.shift().split(' ');
        let com = commands[0];
        let num = Number(commands[1]);
        
            if (com == 'Add') {
                array.push(num);
            }
            if (com == 'Remove') {
                array = array.filter(el => el != num);
            }
            if (com == 'RemoveAt') {
                array.splice(num,1);  //removes number at a given index

            }
            if (com == 'Insert') {
                array.splice(Number(commands[2]),0,num); //inserts a number at a given index
            }
    }
return array.join(' ');
}


console.log(arrayManipulations(['4 19 2 53 6 43','Add 3','Remove 2','RemoveAt 1','Insert 8 3']))