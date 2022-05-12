function addressBook(input) {
    let book = {};
    for (let line of input) {
        let [name, address] = line.split(':');
        book[name] = address;
    }
    let sorted = Object.entries(book); // array of arrays [['Tim', 'Stara Zagora 456'], ['Alma', 'Zagreb 2435']]
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
//sorted alphabetically by the person’s name
        for (let [key, value] of sorted) {
            console.log(`${key} -> ${value}`);
          }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);