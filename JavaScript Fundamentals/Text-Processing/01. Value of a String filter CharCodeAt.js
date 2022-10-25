function valueString(str) {
    let sum = 0;
    let word = str.shift().split('') // изрязавм 1та дума, правя я масив от букви.
        .filter(x => x.charCodeAt(x) >= 65 && x.charCodeAt(x) <= 90 || x.charCodeAt(x) >= 97 && x.charCodeAt(x) <= 122);
    // филтрирам само тези ,които са главни и малки букви!!!
        let instructions = str.shift(); //изрязвам 2та дума.
 
    if (instructions === 'LOWERCASE') {
        word = word.filter(x => x.charCodeAt(x) >= 97 && x.charCodeAt(x) <= 122);
        for (let el of word) {
            el = el.charCodeAt(); // превръщам буквата в код - цифра
            sum += el; // събирам я.
        }
    }
 
    if (instructions === 'UPPERCASE') {
        word = word.filter(x => x.charCodeAt(x) >= 65 && x.charCodeAt(x) <= 90);
        for (let el of word) {
            el = el.charCodeAt();
            sum += el;
        }
    }
    return `The total sum is: ${sum}`
}

console.log(valueString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']));