function schoolGrades(input) {
    let map = new Map(); // let obj = {}; 
    for (let line of input) {
        let tokens = line.split(' ');
        let name = tokens[0];
        let grades = tokens.splice(1, tokens.length).map(Number); // delete from index 1 to end. array 

        if (!map.has(name)) { // ако името го няма includes/array ..hasOwnProperty/object
            map.set(name, []);
            map.set(name, map.get(name).concat(grades));
        } else { // ако името вече го има 
            map.set(name, map.get(name).concat(grades)); // добавяме новите оценки.
//concat merge 2 or more arrays.
        }
    }
    let sorted = Array.from(map).sort((a, b) => average(a, b)); // return array
// а и b  са обектите/ елементи / на индекс 1 се пада оценките и  i достъпваме тях. те са много и са в масив.
    function average(a, b) {
        let aSum = 0;
        for (let i = 0; i < a[1].length; i++) {
            aSum += a[1][i];
        }
        let bSum = 0;
        for (let i = 0; i < b[1].length; i++) {
            bSum += b[1][i];
        }

        let aAverage = aSum / a[1].length;
        let bAverage = bSum / b[1].length;
        return aAverage - bAverage;
    }

    for (let key of sorted) {
        console.log(`${key[0]}: ${key[1].join(', ')}`);
    } 
}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);