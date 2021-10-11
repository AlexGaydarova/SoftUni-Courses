function fishland(array) {
  let priceSkumriqKg = Number(array[0]);
  let priceCacaKg = Number(array[1]);
  let palamudKg = Number(array[2]);
  let safridKg = Number(array[3]);
  let midiKg = Number(array[4]);
  let pricePalamudKg = priceSkumriqKg + priceSkumriqKg * 0.60; 
  let pricePalamud = pricePalamudKg * palamudKg; 
  let priceSafridKg = priceCacaKg + priceCacaKg * 0.80; 
  let priceSafrid = priceSafridKg * safridKg;
  let priceMidiKg = 7.50;
  let priceMidi = priceMidiKg * midiKg;
  let totalSum = pricePalamud + priceSafrid + priceMidi;
  console.log(totalSum.toFixed(2));
}
//Паламуд – 60% по-скъп от скумрията. Сафрид – 80% по-скъп от цацата. Миди – 7.50 лв/kg
// = 6.90 + 6.90 * 0.60 = 11.04 лв./kg
//Сума паламуд = 1.5 * 11.04 = 16.56. Цена на сафрид = 4.20 + 4.20 * 0.80 =  7.56 лв./kg
//Сума сафрид = 2.5 * 7.56 = 18.90 Сума миди = 1 * 7.50 = 7.50. Сметка = 16.56 + 18.90 + 7.50 = 42.96
//плаваща запетая: колко пари за да си плати сметката.Закръглено до вторият знак след запетая.

fishland(["6.90", "4.20", "1.50","2.50", "1"]);
fishland(["5.55", "3.57", "4.3","3.6", "7"]);