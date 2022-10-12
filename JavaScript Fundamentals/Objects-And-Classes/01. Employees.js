function employees(arr) {
    for (let value of arr) {
        let number = value.length;
        console.log(`Name: ${value} -- Personal Number: ${number}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);

