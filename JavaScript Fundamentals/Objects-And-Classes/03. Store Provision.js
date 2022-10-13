function storeProvision(store, delivery) {
    let result = [];

    class Store {
      constructor(productName, quantity) {
        this.productName = productName;
        this.quantity = quantity;
      }
    }

    for (let i = 0; i < store.length; i++) {
      if (i % 2 !== 0) { // индексите са 1,3,5,7,9...
        store[i] = Number(store[i]); //превърни ги в числа.
      }
    }
    

    for (let i = 0; i < delivery.length; i += 2) { // 0,2,4,6 - products
      if (store.includes(delivery[i])) { // има ли го в първия масив?
        let index = store.indexOf(delivery[i]);
        store[index + 1] += Number(delivery[i + 1]); // на следчащата позиция.
      } else {
        store.push(delivery[i]); // добавяме  новия продукт
        store.push(Number(delivery[i + 1])); // добавяме количеството.
      }
    }
  
    for (let i = 0; i < store.length; i += 2) {
    let p = new Store(store[i], store[i + 1]); //productName , quantity
      result.push(p);
    }
  
    for (let obj of result) { // obj - element of array се явява обект/ имаме 8 обекта в един масив.
      console.log(`${obj.productName} -> ${obj.quantity}`);
    }
  }



storeProvision(
['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);