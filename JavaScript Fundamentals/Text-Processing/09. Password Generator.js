function passwordGenerator(input) {
    let string = input[0].concat(input[1]).toLowerCase();
    let vowels = ['a', 'e', 'i', 'o' , 'u'];
    let third = input[2].toUpperCase();
    let index = 0;

    for (let a of string) {
        for (let b of vowels) {
            if (a == b) {
                string = string.replace(a, third[index]);
                index++;
                if (index == third.length) {
                    index = 0;
                }
                break;
            }
        }
    }
    let password = string.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}

// passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);