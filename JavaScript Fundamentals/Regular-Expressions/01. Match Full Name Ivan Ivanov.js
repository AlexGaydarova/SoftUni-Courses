function matchFullName(input) {
    let regEx = /\b([A-Z][a-z]+)[' ']([A-Z][a-z]+)\b/g;
    let string = input.shift(); // взимам 1та позиция - тя е стринг.
    let array = string.match(regEx); // връща масив със съвпадения ['Ivan Ivanov', 'Peter Petrov'];
    console.log(array.join(' '));
}

matchFullName(["Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"]);

function name(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let result = [];

    let match = pattern.exec(input);

    while (match != null) {
        result.push(match[0]);

        match = pattern.exec(input);
    }
    console.log(result.join(' '));
}