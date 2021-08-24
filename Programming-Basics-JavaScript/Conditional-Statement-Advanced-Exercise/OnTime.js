function onTimeForExam(input) {
    let hourExam = Number(input[0]);
    let minuteExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minuteArrival = Number(input[3]);
    let totalMinuteExam = hourExam * 60 + minuteExam;
    let totalMinuteArrival = hourArrival * 60 + minuteArrival;
    if (totalMinuteExam < totalMinuteArrival) {
        console.log(`Late`);
        let diff = totalMinuteArrival - totalMinuteExam;
        if (diff < 60) {
            console.log(`${diff} minutes after the start`);
        } else if (diff >= 60) {
            let hours = Math.floor(diff / 60);
            let min = diff % 60;
            if (min < 10) {
                console.log(`${hours}:0${min} hours after the start`);
            } else {
                console.log(`${hours}:${min} hours after the start`);
            }
        }
    } else if (totalMinuteExam == totalMinuteArrival || totalMinuteExam - totalMinuteArrival <= 30) {
        console.log(`On time`); 
            if (totalMinuteExam - totalMinuteArrival != 0) {
               let diff = totalMinuteExam - totalMinuteArrival;
                console.log(`${diff} minutes before the start`);
        }
    } else  if (totalMinuteExam - totalMinuteArrival > 30)  {
        console.log(`Early`);
        let diff = totalMinuteExam - totalMinuteArrival;
        if (diff < 60) {
            console.log(`${diff} minutes before the start`);
        } else if (diff >= 60) {
            let hours = Math.floor(diff / 60);
            let min = diff % 60;
            if (min < 10) {
                console.log(`${hours}:0${min} hours before the start`);
            } else {
                console.log(`${hours}:${min} hours before the start`);
            }
        }
    }
}

onTimeForExam(["9",
"00",
"10",
"30"])