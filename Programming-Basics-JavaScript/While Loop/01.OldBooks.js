function oldBooks(input) {
    let book = input[0];
    let index = 1;
    let nextBook = input[index];

    while (nextBook != "No More Books") {
        if (nextBook == book) {
        console.log(`You checked ${index - 1} books and found it.`);
        break;
        }
        index++  
        nextBook = input[index];
    }
     if (nextBook != book) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);
    }
}

oldBooks(["Troy","Stronger","Life Style","Troy"]);
oldBooks(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"]);