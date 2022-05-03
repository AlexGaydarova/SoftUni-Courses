function phoneBook(input) {
   let book = {};
   for (let line of input) {
       let [name, number] = line.split(' ');
       book[name] = number; // add key and value.
   }
   for (let key in book) {
       console.log(`${key} -> ${book[key]}`);
   }
}

// когато срещне ключ 2 пъти - заменя автоматично стойността с новата срещната!
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);