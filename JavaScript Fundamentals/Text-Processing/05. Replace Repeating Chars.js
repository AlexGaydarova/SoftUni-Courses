function replaceRepeatingChars(string) {
    let arr = string.split('');             // array ['a','a','a'...]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            arr.splice(i, 1);              //delete that character;
            i = i - 1;
        }
    }
    console.log(arr.join(''));
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');