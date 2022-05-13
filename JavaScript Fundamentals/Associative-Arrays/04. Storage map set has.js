function storage(input) {
   let map = new Map(); // let obj = {}; 
   for (let line of input) {
       let tokens = line.split(' ');
       let product = tokens[0];
       let qty = Number(tokens[1]);

        if (!map.has(product)) { // (!obj.hasOwnProperty(product)) if dont includes..
            map.set(product, qty); // add to map/object. (product - key, qty - value)
        } else { // if includes
            let currQty = map.get(product); // return value of given key.
            currQty += qty;
            map.set(product, currQty);
        }
   }
   for (let key of map) {
       console.log(`${key[0]} -> ${key[1]}`);
   }  
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);