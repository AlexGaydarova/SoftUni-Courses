function inventory(heroList) {
    let heroes = [];

    for (let heroString of heroList) {
        let tokens = heroString.split(' / ');

        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2].split(', '); // array

        let heroData = {
            name,
            level,
            items
        }; // create object.

        heroes.push(heroData); // add object heroData to new array heroes

    }
    let sortedHeros = heroes.sort((a, b) => a.level - b.level); // a, b are objects. ascending by level 

    for (let hero of sortedHeros) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.sort((a, b) => a.localeCompare(b)).join(', ')}`);
    }
}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]);