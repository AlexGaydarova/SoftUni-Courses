function hardWord(input) {
    let letter = input.shift(); //string
    let words = input.shift(); // array

    while (letter.includes('_')) {
        for (let word of words) {

            letter = letter.replace('_'.repeat(word.length), word);
        
        }
    }
    console.log(letter);
}



hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);