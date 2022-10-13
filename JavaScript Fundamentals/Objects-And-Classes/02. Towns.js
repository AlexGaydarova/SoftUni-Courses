function towns(array) {
    for (let data of array) {
        let curr = data.split(" | ");
        let town = curr[0];
        let latitude = Number(curr[1]).toFixed(2);
        let longitude = Number(curr[2]).toFixed(2);
        console.log(`{ town: '${town}', latitude: '${latitude}', longitude: '${longitude}' }`);
    }
  }

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);