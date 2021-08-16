function charityCampaign(input) {
    let charityDays = Number(input[0]);
    let cookers = Number(input[1]);
    let cakes = Number(input[2]);
    let waffles = Number(input[3]);
    let panecakes = Number(input[4]);
    let cakesForDay = cakes * 45;
    let wafflesForDay = waffles * 5.8;
    let panecakesForDay = panecakes * 3.2;
    let sumForDay = (cakesForDay + wafflesForDay + panecakesForDay) * cookers;
    let totalSum = sumForDay * charityDays;
    totalNetSum = totalSum - (totalSum / 8);
    console.log(totalNetSum);
}
charityCampaign(["23","8","14","30","16"]);
charityCampaign(["131","5","9","33","46"]);

//cake - 45 lv. waffles - 5.80 lv. panecakes – 3.20 lv.
// 1/8 from total sum will be for covering the expenses for product in the campaign.

//calculate the sum,which we make for a day - for every product made by 1 sweet cooker.
//waffles: 30 * 5.80 = 174 lv.; 
//panecakes: 16 * 3.20 = 51.20 lv.
//Total sum for 1 day: (630 + 174 + 51.20) * 8 = 6841.60 lv.
//Sum for all the campaign: 6841.60 * 23 = 157356.8 lv.
