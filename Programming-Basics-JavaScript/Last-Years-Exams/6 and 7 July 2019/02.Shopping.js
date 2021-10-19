function shoping(input) {
    let budget = Number(input[0]);
    let videoCardCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramCount = Number(input[3]);
    let videoCardPrice = 250;
    let videoCardTotal = videoCardCount * videoCardPrice;
    let processorPrice = 0.35 * videoCardTotal;
    let processorTotal = processorsCount * processorPrice;
    let ramPrice = 0.10 * videoCardTotal;
    let ramTotal = ramCount * ramPrice;
    let sumTotal = videoCardTotal + processorTotal + ramTotal;
    if (videoCardCount > processorsCount) {
        sumTotal = sumTotal * 0.85;
    } else {
        sumTotal = sumTotal;
    } if (sumTotal <= budget) {
        more = budget - sumTotal;
        console.log(`You have ${more.toFixed(2)} leva left!`);
    } else if (sumTotal > budget) {
        less = sumTotal - budget;
        console.log(`Not enough money! You need ${less.toFixed(2)} leva more!`);
    }
}
shoping(["900", "2", "1", "3"]);
shoping(["920.45", "3", "1", "1"]);

