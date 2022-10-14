function convertToJSON(name, lastName, hairColor) {
    let person = { // когато имената на свойствата и техните стойности са еднакви
        name,      // можем да напишем само веднъж името.
        lastName,
        hairColor
    };
    console.log(JSON.stringify(person)); // превръща Object в JSON формат.
}

convertToJSON('George','Jones','Brown');