function seriesCalculator(input) {
    let seriesName = input[0];
    let seasonsCount = Number(input[1]);
    let episodeCount = Number(input[2]);
    let episodeTime = Number(input[3]);
    let adverseTime = 0.20 * episodeTime;
    let fullEpisodeTime = episodeTime + adverseTime;
    let specialTime = seasonsCount * 10;
    let totalTimeForSeries = fullEpisodeTime * episodeCount * seasonsCount + specialTime;
    console.log(`Total time needed to watch the ${seriesName} series is ${Math.floor(totalTimeForSeries)} minutes.`);
}

seriesCalculator(["Lucifer", "3", "18", "55"]);
seriesCalculator(["Game of Thrones", "7", "10", "50"]);
seriesCalculator(["Riverdale", "3", "21", "45"]);