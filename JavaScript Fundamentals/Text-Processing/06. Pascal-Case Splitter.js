function pascalCaseSplitter(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) { // Ако първата буква е Главна
            let startIndex = i;
            for (let j = startIndex + 1; j < str.length; j++) {
                if (str[j] == str[j].toUpperCase()) { // ако намери пак Главна буква.
                    let endIndex = j;
                    let word = str.substring(startIndex, endIndex);
                    str = str.replace(word,''); // delete word from string
                    result.push(word);
                    i = -1; // връщаме едно назад,защото сме изтрили,думата и така ще прескочим дума.
                    break;
                }
            }
        }
    }
    result.push(str); // добавяме последната дума.
    console.log(result.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');