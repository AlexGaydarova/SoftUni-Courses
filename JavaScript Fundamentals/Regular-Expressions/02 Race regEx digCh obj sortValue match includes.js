function race(input) {
    let string = input.shift().split(', '); 
    let regExChar = /[A-Za-z]/g // отделни букви
    let regExDigit = /\d/g // отделни цифри
    let participants = {};
    let distance = 0;

    for (let line of input) {
        if (line == 'end of race') {
            break;
        }

    let name = line.match(regExChar).join(''); // [масив с букви и ги събираме на стринг]
    let digits = line.match(regExDigit); // масив от цифри
    distance = digits.map(Number).reduce((a,b) => a + b); // превръщаме в Number  и ги сумираме.

        if (string.includes(name)) { // ako в стринга се съдържа името
            if (!participants.hasOwnProperty(name)) { // ако го няма в обекта като ключ го добавяме
                participants[name] = distance; 
            } else {
                participants[name] += distance; // ако го има - добавяме към value още цифри.
            }
        }
    }
    let sorted = Object.entries(participants).sort((a, b) => b[1] - a[1]);
    //сортираме по value = дистанция 
    sorted.length = 3; // правя дължината да е само 3 показателя.
    
    
    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}
    
    

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);