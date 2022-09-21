function rightPlace(str, char, result) {
    let res = str.replace('_',char);
    let out = res === result ? 'Matched' : 'Not Matched';
    // // същото като
    //  if (res === result) {
    //     console.log('Matched');
    // } else {
    //     console.log('Not Matched');
    // }
    
    console.log(out);
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');

function place(str,char,match) {
    let temp = '';

    for (let i = 0; i < str.length; i++) {
        if(str[i] == '_') {
            tmp += char;
        } else {
            tmp += str[i];
        }
    }
    if (tmp == match) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    } 
}

place('Str_ng', 'i', 'String');