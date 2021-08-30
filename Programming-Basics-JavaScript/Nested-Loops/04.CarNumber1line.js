function carNumber(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let print = "";

    for (let i = first; i <= second; i++) {
        for (let j = first; j <= second; j++) {
            for (let k = first; k <= second; k++) {
                for (let l = first; l <= second; l++) {
                    if ((i % 2 == 0 && l % 2 == 1) || (l % 2 == 0 && i % 2 == 1)) {  
                            if (i > l) {
                                if ((j + k) % 2 == 0) {
                                    let tempPrint = "" + i + j + k + l + " ";
                                    print += tempPrint;
                                }
                            }
                        }
                    }
                }
            }
        }   
    console.log(print);
}
//carNumber([2,3]);
carNumber([3,5])