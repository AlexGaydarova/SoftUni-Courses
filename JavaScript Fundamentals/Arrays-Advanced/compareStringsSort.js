let word = ['nest', 'Eggs', 'bite', 'Grip', 'jAw'];
word.sort((a, b) => a.localeCompare(b)); 
// сортита ги по азбучен ред, без значение големи и малки букви.а-z.
word.sort((a, b) => b.localeCompare(a)); // обратен ред. 

localeCompare();
