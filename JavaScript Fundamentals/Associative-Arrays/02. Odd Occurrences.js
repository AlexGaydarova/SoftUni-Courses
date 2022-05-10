function oddOccurrences(string) {
    let occurrences = {};
    let listOfStrings = string.split(' ');

    for (let string of listOfStrings) {
        //set to lowerCase
        let stringToLower = string.toLowerCase();
        //check if string exist
        if (!occurrences.hasOwnProperty(stringToLower)) {
            occurrences[stringToLower] = 0;
        }
        occurrences[stringToLower] += 1;
    }
    let result = [];

    for (let [key, value] of Object.entries(occurrences)) {
        if(value % 2 == 1) {
        result.push(key);
        }
    }
    console.log(result.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');


// function oddOccurrences(string) {
//     let sentence = string.split(' '); // array
//     let map = new Map();

//     for (let word of sentence) {
//         let wordUnique = word.toLowerCase();
//         if (!map.has(wordUnique)) {
//             map.set(wordUnique, 0); // add word-key, value - 0 count 
//         }
//         map.set(wordUnique, map.get(wordUnique) + 1); //count + 1  for every appearance
//     }
//     // let entries = Array.from(map.entries());  
//     let result = [];   
//     for (let [key, value] of map) {
//         if (value % 2 == 1) {
//             result.push(key);
//         }
//     }
//     console.log(result.join(' '));
// }
