function extractFile(string) {
    let words = string.split('\\'); // array of strings
    let lastWord = words[words.length - 1]; // string
    let lastIndex = lastWord.lastIndexOf('.'); // последната поява на точката - връща индекса.
    let firstPart = lastWord.substring(0, lastIndex); // нов стринг от 0 до индекса на точката. - не вкл.
    let secondPart = lastWord.substring(lastIndex + 1); // от индекса на точка + 1 до края на думата.
    
    console.log(`File name: ${firstPart}`); // името на файла
    console.log(`File extension: ${secondPart}`);  // разширението.       
}

extractFile('C:\\Internal\\training-internal\\Template.bbb.pptx');