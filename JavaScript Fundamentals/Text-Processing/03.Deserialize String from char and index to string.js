function deserializeString(input) {
    let obj = {};

    for (let line of input) {
        if (line == 'end') {
            break;
        }
       let [char, indexes] = line.split(':');
       let indx = indexes.split('/');

       if (!obj.hasOwnProperty(char)) { 
        obj[char] = []; 
    }
    obj[char].push(indx); 

    }
    let string = '';
    let arrValues = Object.values(obj);
    let totalLength = 0;
    
    for (let value of arrValues) {
        totalLength += value[0].length;
    }

    for (let i = 0; i < totalLength; i++) {
        for (let [key,values] of Object.entries(obj)) {
            if (values[0].map(Number).includes(i)) {
                string += key;
            }
        }
    }
    console.log(string);
}

deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']);