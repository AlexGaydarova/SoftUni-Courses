function tennisEquipment(input) {
    let priceTenisRaketa = Number(input[0]);
    let countTenisRaketa = Number(input[1]);
    let countMaratonki = Number(input[2]);
    let totalTenisRaketi = priceTenisRaketa * countTenisRaketa;
    let priceMaratonki =  priceTenisRaketa / 6 ; //1/6 от цената на една тенис ракета
    let totalMaratonki = countMaratonki * priceMaratonki;
    let ekipirovka = (totalTenisRaketi + totalMaratonki) * 0.20 ;//на стойност 20% от общата цена на закупените ракети и маратонки.
    let total = totalTenisRaketi + totalMaratonki + ekipirovka;
    let priceDjokovic = total / 8; //1/8 от цената
    let priceSponsori = total * 7 / 8; // 7/8 трябва да бъдат заплатени от неговите спонсори
    console.log(`Price to be paid by Djokovic ${Math.floor(priceDjokovic)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(priceSponsori)}`);
}

tennisEquipment(["850", "4", "2"]);
tennisEquipment(["1000", "3", "1"]);
tennisEquipment(["386", "7", "4"]);
