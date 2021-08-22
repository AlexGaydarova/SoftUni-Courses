function volleyball(input) {
    let year = input[0];
    let countHolidays = Number(input[1]);
    let countWeekendsHome = Number(input[2]);
    let countWeekendsSofia = 48 - countWeekendsHome;
    let gamesWeekendsSofia = countWeekendsSofia * 3.0 / 4;
    let gamesWeekendsHome = countWeekendsHome;
    let gamesHolidays = countHolidays * 2.0 / 3;
    let totalGames = gamesWeekendsSofia + gamesWeekendsHome + gamesHolidays;
    if (year == "leap") {
        totalGames = 1.15 * totalGames;
        console.log(Math.floor(totalGames));
    } else if (year == "normal") {
        totalGames = totalGames;
        console.log(Math.floor(totalGames));
    }
}

volleyball(["normal","3", "2"]);
volleyball(["leap", "2", "3"]);