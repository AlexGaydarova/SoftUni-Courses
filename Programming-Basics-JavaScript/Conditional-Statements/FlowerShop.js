function flowerShop(input) {
    let numMagnolii = Number(input[0]);
    let numZiumbiuli = Number(input[1]);
    let numRozi = Number(input[2]);
    let numKaktusi = Number(input[3]);
    let cenaPodaryk = Number(input[4]);
    let cenaMagnolii = 3.25 ;
    let cenaZiumbiuli = 4;
    let cenaRozi = 3.50;
    let cenaKaktusi = 8;
    let sum = numMagnolii * cenaMagnolii + numZiumbiuli * cenaZiumbiuli + numRozi * cenaRozi + numKaktusi * cenaKaktusi;
    let income = sum * 0.95; //  след данък 5%
    if ( cenaPodaryk <= income) {
        moreMoney = Math.floor(income - cenaPodaryk);
        console.log(`She is left with ${moreMoney} leva.`);
    } else {
        lessMoney = Math.ceil(cenaPodaryk - income);
        console.log(`She will have to borrow ${lessMoney} leva.`);
    }
} 

flowerShop(["2", "3", "5", "1", "50"]);
flowerShop(["15", "7", "5", "10", "100"]);
