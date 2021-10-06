function cake(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++
    let dimension = width * length;
    let sumPieces = 0;
    let comand = input[index];
    index++
    while (sumPieces < dimension) {
        if (comand == "STOP") {
            let left = dimension - sumPieces;
            console.log(`${left} pieces are left.`);
            break;
        } else {
            let tempPiece = Number(comand);
            sumPieces += tempPiece;

            comand = input[index];
            index++
        }
    }
    if (sumPieces >= dimension) {
        let more = sumPieces - dimension
        console.log(`No more cake left! You need ${more} pieces more.`);
    }
}

//cake(["10","10","20","20","20","20","21"]);
cake(["10","2","2","4","6","STOP"]);