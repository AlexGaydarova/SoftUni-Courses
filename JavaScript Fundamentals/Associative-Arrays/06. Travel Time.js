function travelTime(input) {
    let destinations = {};
 
    for (let line of input) {
        let [country, town, price] = line.split(" > ").filter(e => e !== "");
        price = Number(price);
        town = town[0].toUpperCase() + town.slice(1);
 
        if (!destinations.hasOwnProperty(country)) { // ако ключа държава го няма
            destinations[country] = {}; // добави го като ключ и му сложи value празен обект.
        }
        if (!destinations[country].hasOwnProperty(town)) {
            destinations[country][town] = price; // добави в този обект ключ town и value: price
         }
         let prevPrice = destinations[country][town];
         if (prevPrice > price) { // ако новата е по-голяма
             destinations[country][town] = price;
         }
    }
 
    let orderedCountries = [...Object.keys(destinations)].sort((a,b) => a.localeCompare(b)); // връща масив с имената на държавите.
    let result = "";
    for (let country of orderedCountries) {
        result += country + " -> ";
        let sortedPrices = [...Object.keys(destinations[country])].sort((a, b) => a - b);
        for (let town of sortedPrices) {
            result += `${town} -> ${destinations[country][town]} `;
        }
        result += "\n";
    }
    console.log(result);
 
}

// input.sort((a,b) => a.length - b.length || a.localeCompare(b));
// return input.join('\n');
// }

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]);