function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');

    for (let command of arr) {
        let tokens = command.split(' ');
        let existOrNot = inventory.indexOf(tokens[1]);

        if (tokens[0] == 'Buy') {
            if (existOrNot < 0) { // -1 няма го, добавяме го.
                inventory.push(tokens[1]); // add at the end.
            }
        } else if (tokens[0] == 'Trash') {
            if (existOrNot >= 0) { // има го, трием го на тази позиция.
                inventory.splice(existOrNot,1);
            }
        } else if (tokens[0] == 'Repair') {
            if (existOrNot >= 0) { // if exist
                inventory.splice(existOrNot,1); //delete it
                inventory.push(tokens[1]); // add to the end.
            }
        } else if (tokens[0] == 'Upgrade') {
            let elements = tokens[1].split('-');
            let idx = inventory.indexOf(elements[0]);
            if (idx >= 0) {
                let upgradeItem = `${elements[0]}:${elements[1]}`
                inventory.splice(idx + 1,0,upgradeItem);
            }
        }
    }
    return inventory.join(' ');
}

console.log(gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']));