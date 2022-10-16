function cats(arr) {
    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let line of arr) {
        let [name, age] = line.split(' '); 
        // първото нещо от масива го сплитва на 2 променливи. на индекс 0 и 1.
        let cat = new Cat(name, age) //Creating an instance of the class. Подаваме параметри на класа за създаване на обекти.
        cats.push(cat); // добаваме в мовия масив обекта!
    }
    
    for (let cat of cats) {
        cat.meow(); // извикваме функцията.Обекта точка и името и!
    }
}

cats(['Mellow 2', 'Tom 5']);
