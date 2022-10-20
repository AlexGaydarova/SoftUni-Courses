function starEnigma(input) {
    input.shift(); //msgCount
    let pattern = /@(?<planetName>[A-Za-z]+)([^@\-:!>]*):[\d]+([^@\-:!>]*)!(?<attackType>[AD])!([^@\-:!>]*)\->[\d]+([^@\-:!>]*)/;
    let attacked = [];
    let destroyed = [];
 
    for (let line of input) {
        let decryptKey = line.match(/[star]/gi) && line.match(/[star]/gi).length;
        // if has a match => count the matches - 3
        let decryptedMsg = [];
        for (let letter of line) { // for every letter from current string.
            let symbol = letter.charCodeAt(); // convert to charCode number
            symbol -= decryptKey;
            symbol = String.fromCharCode(symbol);
            decryptedMsg.push(symbol); // add to new array
        }
 
        decryptedMsg = decryptedMsg.join(""); // from arr to String
        decryptedMsg = pattern.exec(decryptedMsg);
 
        if (decryptedMsg) {
            if (decryptedMsg.groups.attackType === "A") {
                attacked.push(decryptedMsg.groups.planetName);
            } else {
                destroyed.push(decryptedMsg.groups.planetName);
            }
        }
    }
 
    attacked.sort((a, b) => a.localeCompare(b)) //sort alphabetically
    destroyed.sort((a, b) => a.localeCompare(b))
 
    console.log(`Attacked planets: ${attacked.length}`);
    attacked.forEach(planet => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${destroyed.length}`)
    destroyed.forEach(planet => console.log(`-> ${planet}`));
}

starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']);