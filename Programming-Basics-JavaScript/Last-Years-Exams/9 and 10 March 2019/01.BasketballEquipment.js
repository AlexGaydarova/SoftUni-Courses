function basketballEquipment(input) {
    let godTax = Number(input[0]);
    let kecove = godTax * 0.60; //40% по-малка от таксата за една година
    let ekip = kecove * 0.80; //20% по-евтина от тази на кецовете
    let topka = ekip * 1 / 4; //1 / 4 от цената на баскетболния екип
    let aksesoari = topka * 1 / 5;
    let total = godTax + kecove + ekip + topka + aksesoari;
    console.log(total.toFixed(2));
}

basketballEquipment(["320"]);
basketballEquipment(["550"]);