function meetings(input) {
    let plan = {};
    for (let line of input) {
        let [day, name] = line.split(' ');

        if (plan.hasOwnProperty(day)) { // same as includes method array.
            console.log(`Conflict on ${day}!`);
        } else {
            plan[day] = name; // add to object key-day and value - name.
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let key in plan) {
        console.log(`${key} -> ${plan[key]}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);

// когато срещне ключ 2 пъти - заменя автоматично стойността с новата срещната!