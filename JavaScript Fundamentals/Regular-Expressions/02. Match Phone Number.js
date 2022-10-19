function matchPhoneNumber(input) {
    let regExNumbers = /[+]359([ -])2\1\d{3}\1\d{4}\b/g;
    let string = input.shift(); // взимам 1та позиция - тя е стринг.
    let array = string.match(regExNumbers); // връща масив със съвпадения ['+359 2 222 5555', '+359-2-555-9999'];
    console.log(array.join(', '));

}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);