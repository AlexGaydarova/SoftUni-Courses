function skeleton(input) {
    let minute = Number(input[0]);
    let seconds = Number(input[1]);
    let duljinaUlei = Number(input[2]);
    let seconds100m = Number(input[3]);
    let kontrolaSeconds = minute * 60 + seconds;
    let delayTime = duljinaUlei / 120 * 2.5;
    let timeMarin = (duljinaUlei / 100 * seconds100m) - delayTime;
    if (timeMarin <= kontrolaSeconds) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${timeMarin.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(timeMarin - kontrolaSeconds).toFixed(3)} second slower.`);
    }
}

skeleton(["2", "12", "1200", "10"]);