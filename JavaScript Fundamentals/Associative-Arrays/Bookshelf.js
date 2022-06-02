function solve(input) {
    let bookshelf = {};

    // main loop -> iterate all input elements
    for (let line of input) {
        if (line.includes('->')) {
            createShelf(bookshelf, line);
        } else {
            storeBook(bookshelf, line);
        }
    }

    // print result
    let sorted = Object.entries(bookshelf).sort(compareShelf);

    for (let [id, shelf] of sorted) {
        console.log(`${id} ${shelf.genre}: ${shelf.books.length}`);

        let sortedBooks = shelf.books.sort((a, b) => a.name.localeCompare(b.name));

        for (let book of sortedBooks) {
            console.log(`--> ${book.name}: ${book.author}`);
        }
    }


    function compareShelf(a, b) {
        let countA = a[1].books.length;
        let countB = b[1].books.length;

        return countB - countA;
    }

    function createShelf(bookshelf, line) {
        let [id, genre] = line.split(' -> ');
        if (bookshelf[id] == undefined) {
            bookshelf[id] = {
                genre,
                books: []
            };
        }
    }

    function storeBook(bookshelf, line) {
        let [name, rest] = line.split(': ');
        let [author, genre] = rest.split(', ');

        let shelf = Object.entries(bookshelf).find(([id, b]) => b.genre == genre);

        if (shelf != undefined) {
            shelf[1].books.push({ name, author });
        }
    }
}