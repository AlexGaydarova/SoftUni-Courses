// function NxNMatrix(num) {
// return num => ((num + ' ').repeat(num) + '\n').repeat(num);
// }

function nXnMatrix(number) {
    for (let i = 0; i < number; i++) { // ползваме като брояч. за редовете
        let row = '';
        for (let j = 0; j < number; j++) { // за колоните долепяме.
            row += `${number} `;
        }
        console.log(row);
    }
}

//nXnMatrix(3);

function nXnMatrix1(number) {
    function constructRow(n) {
        let row = '';
        for (let j = 0; j < number; j++) { // за колоните долепяме.
            row += `${number} `;
        }
        return row;
    }

    for (let i = 0; i < number; i++) { // ползваме като брояч. за редовете 
        console.log(constructRow(number));
    }
}

nXnMatrix1(2);

function matrix(num) {
 
    function lines(a) {
        let thelineOne = (a + ' ').repeat(a);
        return thelineOne + '\n';
    }
 
    function reps(ass) {
        for (let i = 1; i <= ass; i++) {
            return lines(ass).repeat(ass-1);
        }
        
    }
    return lines(num) + reps(num);
}

//matrix(3);

