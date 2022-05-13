function partyTime(input) {
    let vipList = [];
    let regularList = [];
    let reservation = input.shift();

    while(reservation != 'PARTY') {
        if(reservation[0] >= 0 && reservation[0]<= 9) {
            vipList.push(reservation);
        } else {
            regularList.push(reservation);
        }
        reservation = input.shift();
    }

    for(let guest of input) {
        let vipIndex = vipList.indexOf(guest);
        let regularIndex = regularList.indexOf(guest);

        if (vipIndex >= 0) { // guest exist.
            vipList.splice(vipIndex, 1); // delete from array
        } 
        if (regularIndex >= 0) { // if guest exist
            regularList.splice(regularIndex, 1); //delete from array
        }
    }

    console.log(vipList.length + regularList.length); // count guests who didndt come to party
    //затова трием ,които са дошли , за да останат тези ,които не са дошли.
    vipList.forEach(el => console.log(el));
    regularList.forEach(el => console.log(el));
}

partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]);

function partyTime(input) {
    let vipGuestsList = [];
    let regularGuestsList = [];
    let reservation = input.shift();
    while (reservation !== 'PARTY') {
        if (/^\d+/.test(reservation)) {
            vipGuestsList.push(reservation);
        } else {
            regularGuestsList.push(reservation);
        }
        reservation = input.shift();
    }
    for (let guest of input) {
        if (vipGuestsList.indexOf(guest) >= 0) {
            vipGuestsList.splice(vipGuestsList.indexOf(guest), 1);
        }
        if (regularGuestsList.indexOf(guest) >= 0) {
            regularGuestsList.splice(regularGuestsList.indexOf(guest), 1);
        }
    }
    console.log(vipGuestsList.length + regularGuestsList.length);
    vipGuestsList.forEach(el => console.log(el));
    regularGuestsList.forEach(el => console.log(el));
}
