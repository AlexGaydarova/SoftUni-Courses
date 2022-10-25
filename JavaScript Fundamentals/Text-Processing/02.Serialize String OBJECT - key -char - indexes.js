function serializeString(str) {
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        if (!obj.hasOwnProperty(str[i])) { // ако ключа държава го няма
            obj[str[i]] = []; // добави го като ключ и му сложи value празен масив.
        }
        obj[str[i]].push(i); // добави като стойност индекса.
    }
    
    for (let [key,values] of Object.entries(obj)) {
        console.log(`${key}:${values.join('/')}`);
    }
}

serializeString('abababa');