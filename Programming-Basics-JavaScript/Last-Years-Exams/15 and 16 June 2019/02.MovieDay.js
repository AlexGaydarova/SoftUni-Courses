function movieDay(input) {
    let timeForPhotos = Number(input[0]);
    let countScenes = Number(input[1]);
    let timeScene = Number(input[2]);
    let preperation = 0.15 * timeForPhotos;
    let timeShootScene = timeScene * countScenes;
    let realTime = timeShootScene + preperation;
    if (realTime > timeForPhotos) {
        needTime = realTime - timeForPhotos;
        console.log(`Time is up! To complete the movie you need ${Math.round(needTime)} minutes.`);
    } else {
        leftTime = timeForPhotos - realTime;
        console.log(`You managed to finish the movie on time! You have ${Math.round(leftTime)} minutes left!`);
    }
}

movieDay(["120","10","11"]);
movieDay(["60","15","3"]);