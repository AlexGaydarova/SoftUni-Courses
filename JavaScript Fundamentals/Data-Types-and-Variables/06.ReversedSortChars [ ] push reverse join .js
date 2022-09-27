function reversedChars(p1,p2,p3) {
    let result = `${p3} ${p2} ${p1}`;
    console.log(result);
}
reversedChars('A','B','C');

function reversedChar(p1,p2,p3) {
    let together = [];
    together.push(p1,p2,p3);
    let sortReverse = together.reverse();
    console.log(sortReverse.join(' '));
}

//reversedChar('A','B','C');