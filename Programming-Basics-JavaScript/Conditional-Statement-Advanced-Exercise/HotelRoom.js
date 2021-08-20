function hotelRoom(input) {
    let month = input[0];
    let countNights = Number(input[1]);
    let totalPriceApartment = 0;
    let totalPriceStudio = 0;
    //May, June, July, August, September или October
    switch (month) {
        case "May":
        case "October":
            totalPriceApartment = countNights * 65;
            totalPriceStudio = countNights * 50;
            if (countNights > 14) {
                totalPriceApartment = totalPriceApartment * 0.90;
                totalPriceStudio = totalPriceStudio * 0.70;
            } else if (countNights > 7) {
                totalPriceStudio = totalPriceStudio * 0.95;
            } else {
                totalPriceApartment = totalPriceApartment;
                totalPriceStudio = totalPriceStudio;
            }
            break;
        case "June":
        case "September":
            totalPriceApartment = countNights * 68.70;
            totalPriceStudio = countNights * 75.20;
            if ( countNights > 14) {
                totalPriceApartment = totalPriceApartment * 0.90;
                totalPriceStudio = totalPriceStudio * 0.80;
            }else {
                totalPriceApartment = totalPriceApartment;
                totalPriceStudio = totalPriceStudio;
            }
        break;
        case "July":
        case "August":
            totalPriceApartment = countNights * 77;
            totalPriceStudio = countNights * 76;
            if (countNights > 14) {
                totalPriceApartment = totalPriceApartment * 0.90;
            } else {
                totalPriceApartment = totalPriceApartment;
                totalPriceStudio = totalPriceStudio;
            }
            break;
    }
    console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);
}
hotelRoom(["May","15"]);