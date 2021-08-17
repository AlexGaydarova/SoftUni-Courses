function worldSwimmingRecord(input) {
    let recordSeconds = Number(input[0]);
    let metri = Number(input[1]);
    let timeSeconds = Number(input[2]);
    let ivanTime = metri * timeSeconds;
    let delay = Math.floor(metri / 15) * 12.5;
    let totalIvanTime = ivanTime + delay;
    if (totalIvanTime < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalIvanTime.toFixed(2)} seconds.`);
    } else  {
        secondsLess = totalIvanTime - recordSeconds;
        console.log(`No, he failed! He was ${secondsLess.toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]);