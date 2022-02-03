function houseParty(input) {
    let party = [];
    for (let i = 0; i < input.length; i++) {
        let expresion = input[i].split(' ');
        let guest = expresion[0];
        let goingOrNot = expresion[1];
        let not = expresion[2]
        if (goingOrNot == "is" && not == 'going!') {
            let check = party.includes(guest);
            if (check) {
                console.log(`${guest} is already in the list!`);
            } else {
                party.push(guest); // добави го,ако го няма.
            }
        } else {
            let check = party.includes(guest);
            let index = party.indexOf(guest);
            if (check) {
                party.splice(index,1); // ако го има изтрий го.
            } else {
                console.log(`${guest} is not in the list!`);
            }
        }
    }
    for (let every of party)
    console.log(every);
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);