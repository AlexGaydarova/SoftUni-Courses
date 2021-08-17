function sleepyTomCat(input) {
    let holidaysCount = Number(input[0]);
    let holidaysMin = holidaysCount * 127;
    let workingDaysMin = (365 - holidaysCount) * 63;
    let totalMin = holidaysMin + workingDaysMin;
    let normTom = 30000;
if (normTom > totalMin) {
    console.log(`Tom sleeps well`);
    play = normTom - totalMin;
    playHours = Math.trunc(play / 60);
    playMin = play % 60;
    console.log(`${playHours} hours and ${playMin} minutes less for play`);
} else if ( normTom < totalMin) {
    console.log(`Tom will run away`);
    play = totalMin - normTom;
    playHours = Math.trunc(play / 60);
    playMin = play % 60;
    console.log(`${playHours} hours and ${playMin} minutes more for play`);
    }
}

sleepyTomCat(["20"]);
sleepyTomCat(["113"]);
