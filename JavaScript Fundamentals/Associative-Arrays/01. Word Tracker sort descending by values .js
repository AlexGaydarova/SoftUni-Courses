function wordTracker(listOfStrings) {
    let wordsToSearch  = listOfStrings.shift().split(' ');

    let words = {};

    for (let word of wordsToSearch) {
        words[word] = 0;
    }

    for (let word of listOfStrings) {
        if(Object.keys(words).includes(word)) {
            words[word] += 1;
        }
    }
    //[this, 3], [sentance, 2]
    let sortedWords = Object.entries(words).sort((a,b) => b[1] - a[1]);

    for (let [key, value] of sortedWords) {
        console.log(`${key} - ${value}`);
    }
}

wordTracker([
    'this sentence', 'In','this','sentence','you','have','to','count','the',
    'occurances','of','the','words','this','and','sentence','because','this',
    'is','your','task'
    ]);




// function wordTracker(input) {
//     let searchWords = input.shift().split(' '); // array 
//     let map = new Map();

//     for (let word of input) {
//         if(searchWords.includes(word)) {
//             if (!map.has(word)) { // if doesnt exist - add the word like key
//                 map.set(word, 0); // count 0 is the value of key.
//             }
//             map.set(word, map.get(word) + 1); // if exists increace with 1.
//         }     
//     }
//     let sorted = Array.from(map);
//     sorted.sort((a, b) => b[1] - a[1]);
//         for (let [word, words] of sorted) {
//             console.log(`${word} - ${words}`);
//         }
// }



function wordsTracker(array) {
    let wantedWords = array.shift().split(' ');
    let wantedWordsCounts = {};
    wantedWords.forEach(word => wantedWordsCounts[word] = 0);
    array.forEach(word => word in wantedWordsCounts && wantedWordsCounts[word]++);
    wantedWords.sort((a, b) => wantedWordsCounts[b] - wantedWordsCounts[a]);
    wantedWords.forEach(word => console.log(`${word} - ${wantedWordsCounts[word]}`));
}


// function wordsTracker(array) {
//     let wantedWords = array.shift().split(" ");
//     let counter = 0;
//     let objWontedWords = [];
 
//     for (let i = 0; i < wantedWords.length; i++) {
//         array.forEach(element => {
//             if (!wantedWords[i].indexOf(element)) {
//                 counter++
//             }
//         });
        
//             let word = wantedWords[i];
//             let count = counter;
//             objWontedWords.push({ word, count })
        
//         counter = 0;
//     }
//     objWontedWords.sort((a, b) => b.count - a.count);
 
//     for (let i = 0; i < objWontedWords.length; i++) {
 
       
//         console.log(`${objWontedWords[i].word} - ${objWontedWords[i].count}`);
//     }
    
// }