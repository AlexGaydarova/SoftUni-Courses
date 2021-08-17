function harvest(input) {
    let x = Number(input[0]); //площ kv.m
    let y = Number(input[1]); // kg. grozde 1 kv.m
    let z = Number(input[2]); //  jelani litri vino 
    let workers = Number(input[3]);
    let grape = x * y;
    let wine = (0.40 * grape) / 2.5;
    //40% от реколтата за производство на вино. За 1л вино са нужни 2,5 кг. грозде.
    if (z > wine) {
        wineLess = z - wine;
        console.log(`It will be a tough winter! More ${Math.floor(wineLess)} liters wine needed.`);
    } else if ( z <= wine) {
        wineMore = wine - z;
        winePerOne = wineMore / workers;
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(wineMore)} liters left -> ${Math.ceil(winePerOne)} liters per person.`);
    }
}
//harvest(["650", "2", "175", "3"]);
harvest(["1020", "1.5", "425", "4"]);
harvest(["1020", "1.5", "425", "4"]);

