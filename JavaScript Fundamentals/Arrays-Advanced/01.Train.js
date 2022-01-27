function train(input) {
    let wagons = input.shift().split(' ').map(Number);
    let maxCapacity = Number(input.shift());

    while (input.length != 0) {
        tokens = input.shift().split(' ');
        let command = tokens[0];
        let passengers = Number(tokens[1]);

        if (command == 'Add') {
            wagons.push(passengers);
        } else {
            for ( let j = 0; j < wagons.length; j++) {
                let needFreeSeats = maxCapacity - wagons[j];
                if (needFreeSeats >= Number(command)) {
                    wagons[j] += Number(command);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75']);