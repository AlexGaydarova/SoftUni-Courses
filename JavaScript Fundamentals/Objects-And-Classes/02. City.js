function printCity(city) {
    console.log(`name -> ${city.name}`);
    console.log(`area -> ${city.area}`);
    console.log(`population -> ${city.population}`);
    console.log(`country -> ${city.country}`);
    console.log(`postCode -> ${city.postCode}`);
}

printCity({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});


//===//====//======//========//=======///=========//

function city(someCity) {
    for (let key of Object.keys(someCity)){
        console.log(`${key} -> ${someCity[key]}`); // someCity[key] - индексира - намери на тази стойност.
    }
}

city({
    name: "Stara Zagora",
    area: 542,
    population: 125000,
    country: "Bulgaria",
    postCode: "6000"
});