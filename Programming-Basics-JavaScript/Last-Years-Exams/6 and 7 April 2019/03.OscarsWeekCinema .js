function oscarsWeekCinema(input) {
    let movieName = input[0];
    let typeRoom = input[1];
    let countBileti = input[2];
    let price = 1;
if (movieName === "A Star Is Born") {
    if (typeRoom === "normal") {
        price = countBileti * 7.50;
    } else if (typeRoom === "luxury") {
        price = countBileti * 10.50;
    } else if (typeRoom === "ultra luxury") {
        price = countBileti * 13.50;
    }
} else if (movieName === "Bohemian Rhapsody") {
    if (typeRoom === "normal") {
        price = countBileti * 7.35;
    } else if (typeRoom === "luxury") {
        price = countBileti * 9.45;
    } else if (typeRoom === "ultra luxury") {
        price = countBileti * 12.75;
    } 
} else if (movieName === "Green Book") {
    if (typeRoom === "normal") {
        price = countBileti * 8.15;
    } else if (typeRoom === "luxury") {
        price = countBileti * 10.25;
    } else if (typeRoom === "ultra luxury") {
        price = countBileti * 13.25;
    } 
} else if (movieName === "The Favourite") {
    if (typeRoom === "normal") {
        price = countBileti * 8.75;
    } else if (typeRoom === "luxury") {
        price = countBileti * 11.55;
    } else if (typeRoom === "ultra luxury") {
        price = countBileti * 13.95;
    } 
}
    console.log(`${movieName} -> ${price.toFixed(2)} lv.`);
}

oscarsWeekCinema(["A Star Is Born", "luxury", "42"]);
//oscarsWeekCinema(["The Favourite", "ultra luxury", "34"]);
//oscarsWeekCinema(["Green Book", "normal", "63"]);