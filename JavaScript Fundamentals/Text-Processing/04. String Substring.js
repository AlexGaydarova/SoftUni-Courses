function stringSubstring(word, text) {
    let tokens = text.split(' '); // split text into tokens array

     for (let token of tokens) { // for each token
        if (word.toLocaleLowerCase() == token.toLocaleLowerCase()) {
            // if token equal word case-insensitive -> print
            return console.log(word);
        }
     }
     //print failure
     console.log(`${word} not found!`);
}

stringSubstring('javascript',
'JavaScript is the best programming language');