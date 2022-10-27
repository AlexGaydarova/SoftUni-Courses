function countOccurrences(text, searchedWord) {
    let words = text.split(' '); // думите в изречението  от стринг в масив.
    let counter = 0;

    for (let word of words) {
        if (searchedWord == word) {
            counter++;
        }
    }
    console.log(counter);
}

countOccurrences("This is a word and it also is a sentence",
"is");