function catalogue(input) {
    let store = [];

    for (let line of input) {
        let tokens = line.split(' : ');
        let name = tokens[0];
        let price = Number(tokens[1]);

        let products = {
            name,
            price
        }; // create object.

        store.push(products); // add object heroData to new array heroes
    }
    store.sort((a, b) => a.name.localeCompare(b.name));
    
    
   let currentLetter = '';
   for (let product of store) {
       if (product.name.charAt(0).toUpperCase() === currentLetter){
           console.log(`  ${product.name}: ${product.price}`)
       }else {
           currentLetter = product.name.charAt(0).toUpperCase();
           console.log(currentLetter);
           console.log(`  ${product.name}: ${product.price}`)
       }    
    }
}

catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]);