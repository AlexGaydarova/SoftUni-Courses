function printDNA(n){
    let sequence = 'ATCGTTAGGG'.split('') // разбивам го на отделни буквички.

    for(let i = 1; i <= n; i++){ // брояч от 1 до числото n. 
        let [a, b] = sequence.splice(0,2) // изтривам от 0лев индекс - 2 букви.(0 и 1 индекс). Слагам ги на а и б.
        
        if(i === 1 || i % 4 === 1){
            console.log(`**${a}${b}**`);
            
        }
        else if(i === 2 || i % 4 === 2){
            console.log(`*${a}--${b}*`);
            
        }
        else if(i === 3 || i % 4 === 3){
            console.log(`${a}----${b}`);
            
        }
        else if(i === 4 || i % 4 === 0){
            console.log(`*${a}--${b}*`);
            
        }
        
        sequence.push(a) // слагам ги накрая на масива. добавям ги отново. 
        sequence.push(b)
        
    }
}

printDNA(10);