function yardGreening(input) {
    let kvM = Number(input[0]);
    let priceKvM = 7.61; //Цената на един кв. м. е 7.61лв със ДДС
    let priceGreen = kvM * priceKvM;
    let discount = 0.18;
    let discountLv = discount * priceGreen;
    let totalPrice = priceGreen - discountLv; //18% отстъпка от крайната цена
    console.log(`The final price is: ${totalPrice} lv.`);
    console.log(`The discount is: ${discountLv} lv.`);
}
yardGreening(["550"]);
yardGreening(["150"]);
//Пресмятаме цената за озеленяване на целия двор: 550 * 7.61 = 4185.5 лв.
//Приспадаме отстъпката от общата сума: 0.18 * 4185.5 = 753.39 лв.
//Калкулираме крайната цена на услугата: 4185.5 – 753.393432.11лв.
