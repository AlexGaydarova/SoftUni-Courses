function removeOccurrences(word, text) {
    while (text.includes(word)) {
        text = text.replace(word, '');
    }
    console.log(text);
}

removeOccurrences('ice', 'kicegiciceeb');


function solve(word, text) {
    let old;
    while (old !== text) {
      old = text;
      text = text.replace(word, '');
    }
    console.log(text);
  }

//NOTE: Be careful by using loops for replacing  string
// with another one! Case like this: replacing "str" with
// "new-str" will cause an infinite loop!
