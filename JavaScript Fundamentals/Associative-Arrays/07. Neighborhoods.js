function neighborhoods(input) {
    let neighborhoodsList = input.shift().split(', '); // array
    let map = new Map();
    
    for (let line of neighborhoodsList) {
        map.set(line, []); // add neighbors in map like keys, and value is empty []
    }

    for (let tokens of input) {
        let [neighbor, person] = tokens.split(' - ');

        if(neighborhoodsList.includes(neighbor)) {
            map.get(neighbor).push(person); // the value is array -> push. add value.
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1].length - a[1].length);

    for (let neighborhood of sorted) { // array
        let neighborhoodName = neighborhood[0];
        let persons = neighborhood[1];
        console.log(`${neighborhoodName}: ${persons.length}`);
        for (let j = 0; j < persons.length; j++) {
          console.log(`--${persons[j]}`);
        }
      }
}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']);