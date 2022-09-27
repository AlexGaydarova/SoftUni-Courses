function chessBoard(n) {
    let result = '<div class="chessboard"> \n'; // Първи ред
    let color = 'black';

    for (let i = 0; i < n; i++) { // for every row
        result += '  <div> \n';

        if (n % 2 === 0) {
            if (color === 'black') {
                color = 'white';
            } else {
                color = 'black';
            }
            // color = color === 'black' ? 'white' : 'black'; // тернарен оператор кратък.
        }

        if (i === 0) {
            color = 'black';
        }

        for (let j = 0; j < n; j++) {
            result += `    <span class="${color}"></span> \n`; //for every colons

            if (color === 'black') {
                color = 'white';
            } else {
                color = 'black';
            }
        }
        result += '  </div> \n';
    }
    result += '</div>'; //последен ред
    console.log(result);
}

chessBoard(4);