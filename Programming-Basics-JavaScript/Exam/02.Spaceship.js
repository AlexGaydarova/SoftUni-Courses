function spaceship(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let avgHeight = Number(input[3]);

    let areaRacket = width * length * height;
    let areaRoom = (avgHeight + 0.40) * 2 * 2;
    let space = Math.floor(areaRacket / areaRoom);

    if (space > 10) {
        console.log(`The spacecraft is too big.`);
    } else if (space >= 3) {
        console.log(`The spacecraft holds ${space} astronauts.`);
    } else {
        console.log(`The spacecraft is too small.`);
    }
}

spaceship(["4.5",
"4.8",
"5",
"1.75"])