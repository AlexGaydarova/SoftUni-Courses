function lunchBreak(input) {
    let seriesName = input[0];
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);
    let timeForLunch = breakTime * 1 / 8;
    let timeForRelax = breakTime * 1 / 4;
    let freeTime = breakTime - timeForLunch - timeForRelax;
    if (freeTime >= episodeTime) {
        leftTime = freeTime - episodeTime;
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(leftTime)} minutes free time.`);
    } else {
        needTime = episodeTime - freeTime;
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(needTime)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);