function gramophone(band,album,song) {
let duration = album.length * band.length * song.length / 2;
let rotation = Math.ceil(duration / 2.5);
console.log(`The plate was rotated ${rotation} times.`);
}

//gramophone('Black Sabbath', 'Paranoid', 'War Pigs');

function gramo(band,album,song) {
    let dur = album.length * band.length * song.length / 2;
    let rot = 0;

    while (dur > 0) {
        rot++;
        dur -= 2.5;
    }
    console.log(`The plate was rotated ${rot} times.`);
}
gramo('Black Sabbath', 'Paranoid', 'War Pigs');
