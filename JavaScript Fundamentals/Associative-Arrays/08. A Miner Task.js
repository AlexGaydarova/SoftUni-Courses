function minerTask(input) {
    let mine = {};

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            if (!mine.hasOwnProperty(input[i])) {
                mine[input[i]] = 0;
            }
            mine[input[i]] += Number(input[i + 1]);
        }
    }
    for (let [key, value] of Object.entries(mine)) {
        console.log(`${key} -> ${value}`)
    }
}

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]);