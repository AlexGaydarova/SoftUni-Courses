function modernTimes(string) {
    let arr = string.split(' '); // от изречение на списък с думи.
    for (let word of arr) {
        let isWordCorrect = true; // първо е вярна.
        if (word.startsWith('#') && word.length > 1) { // трябва да започва с # и да е по-голяма от 1 символ.
             
            for (let i = 1; i < word.length; i++) { // цикъл за всяка буква от думата, като прескочим 0-я.
                if ((word[i].charCodeAt(0) < 65 || word[i].charCodeAt(0) > 90) && 
                ((word[i].charCodeAt(0) < 97 || word[i].charCodeAt(0) > 122))) {
                    isWordCorrect = false; // ако буквата се намира в този диапазон, значи не е буква! , а цифра или @,%...знак
                }
            }
            if (isWordCorrect) { // ако думата е останала вярна, значи отговаря и на 3те критерия.
                let el = word.substring(1, word.length); // изрязваме от 1-я до последния. ТОест без #.
                console.log(el); // принтираме на нов ред.
            } 
        } 
    }
}

modernTimes('Nowadays #cat20 everyone uses to tag a #special word in #socialMedia');