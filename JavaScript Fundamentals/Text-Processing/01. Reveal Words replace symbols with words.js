function revealWords(firstString, secondString) {
    let words = firstString.split(', ');
    while (secondString.includes('*')) {
            for (let word of words) {
            secondString = secondString.replace('*'.repeat(word.length), word); 
        }
    }
    console.log(secondString);
}

revealWords('learning, great',
'softuni is ***** place for ******** new programming languages');