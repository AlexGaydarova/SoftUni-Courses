function housePainting(array) {
    let x = Number(array[0]); //височината на къщата 
    let y = Number(array[1]); //дължината на страничната стена 
    let h = Number(array[2]); //височината на триъгълната стена на прокрива 
    let sideWall = x * y;
    let window = 1.5 * 1.5;
    let twoSides = 2 * sideWall - 2 * window;
    let backSide = x * x;
    let door = 1.2 * 2;
    let frontAndBack = 2 * backSide - door;
    let totalSides = twoSides + frontAndBack;
    let litriZelenaBoq = totalSides / 3.4;
    let rectangleCeiling = 2 * (x * y);
    let triangleCeiling = 2 * (x * h / 2);
    let totalCeiling = rectangleCeiling + triangleCeiling;
    let litriChervenaBoq = totalCeiling / 4.3;
    console.log(litriZelenaBoq.toFixed(2));
    console.log(litriChervenaBoq.toFixed(2));
}
//СТЕНИ Страничната стена е с площ – 6*10 = 60; Прозорецът е с площ = 1.5*1.5 = 2.25;
//Двете страници са общо – 2*60 - 2*2.25 = 115.5;Задната стена – 6*6 = 36; Вход: 1.2*2 = 2.4
//на предната стена има правоъгълна врата с широчина 1.2м и височина 2м
//и на двете странични стени има по един квадратен прозорец със страна 1.5м
//Общо предна и задна – 2*36 - 2.4 = 69.6 ОБЩА ПЛОЩ: 115.5 + 69.6 = 185.1 м2
//Зелена боя = 185.1 / 3.4 = 54.44 литра. Зелената боя е 1 литър за 3.4 м2 
//ПОКРИВ Двата правоъгълника на покрива – 2 * (6*10) = 120 Двата триъгълниците – 2 * (6*5.2 / 2) = 2 * 15.6 = 31.2
//ОБЩА ПЛОЩ: 120 + 31.2 = 151.2 м2 Червена боя = 151.2 / 4.3 = 35.16 литра. Червената – 1 литър за 4.3 м2
housePainting(["6", "10", "5.2"]);
housePainting(["10.25", "15.45", "8.88"]);