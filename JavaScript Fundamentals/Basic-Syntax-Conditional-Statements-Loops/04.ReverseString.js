function ReverseString(word) {
    let sepWord = word.split('');
    let reverseLetter = sepWord.reverse();
    let newWord =reverseLetter.join('');
    console.log(newWord);
}

ReverseString('Hello');