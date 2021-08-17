function timePlus15Minutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let totalMin = hours * 60 + minutes;
    let totalMinAfter = totalMin + 15;
    let finalHours = Math.floor(totalMinAfter / 60);
    let finalMinutes = totalMinAfter % 60;
    if (finalHours > 23) {
        finalHours = 0;
    }
    if (finalMinutes < 10) {
        console.log(`${finalHours}:0${finalMinutes}`);
    } else {
        console.log(`${finalHours}:${finalMinutes}`); 
    }
}

timePlus15Minutes(["1", "46"]);
timePlus15Minutes(["0", "01"]);
timePlus15Minutes(["23", "59"]);
timePlus15Minutes(["12", "49"]);
