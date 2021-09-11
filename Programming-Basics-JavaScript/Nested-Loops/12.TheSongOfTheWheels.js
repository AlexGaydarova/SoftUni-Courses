function theSongOfTheWheels(input) {
    let n = Number(input[0]);
    let print = "";
    let counter = 0;
    let password = "";
    let flag = true; // няма ли такива числа - все още НЕ?? ако остане тру. 

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9 ; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    if (i < j && k > l ) {
                        if (i * j + k * l == n) {
                            print += "" + i + j + k + l + " ";
                            counter++;
                            flag = false;
                            if (counter == 4) {
                                password = `${i}${j}${k}${l}`;
                            } 
                        } 
                    }
                }
            }
        }
    }
    console.log(print);
    if (counter >= 4) {
        console.log(`Password: ${password}`);
    } else if (counter < 4 || flag) { // ако остане вярно - значи няма числа и пишем NO
        console.log(`No!`);
    } 
}
//theSongOfTheWheels([11]);
//theSongOfTheWheels([139]);
theSongOfTheWheels([110]);