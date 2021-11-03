// SHIFT 1ви вариант.
function login(list) {
    let username = list.shift();
    let passwordAsList = username.split('');
    let paswordReversed = passwordAsList.reverse();
    let password = paswordReversed.join('');
    let counter = 0;

    while (true) {
        let enteredPassword = list.shift();
        counter++;
        if (counter == 4) {
            console.log(`User ${username} blocked!`);
            break;
        }

        if (enteredPassword === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            console.log('Incorrect password. Try again.');
        }
    }
}

//login(['Acer','login','go','let me in','recA']);

// INDEX 2ри вариант.
function login1(list) {
    let index = 0;
    let username = list[index];
    index++;
    let passwordAsList = username.split('');
    let paswordReversed = passwordAsList.reverse();
    let password = paswordReversed.join('');
    let counter = 0;

    while (true) {
        let enteredPassword = list[index];
        counter++;
        if (counter == 4) {
            console.log(`User ${username} blocked!`);
            break;
        }

        if (enteredPassword === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            console.log('Incorrect password. Try again.');
        }
        index++;
    }
}

login1(['sunny','rainy','cloudy','sunny','not sunny']);