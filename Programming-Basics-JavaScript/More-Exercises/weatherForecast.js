function weatherForecast(input) {
    let choice = input[0];
    if (choice == "sunny") {
        console.log("It's warm outside!");
    } else  {
        console.log("It's cold outside!");
    } 
}
weatherForecast(["sunny"]);

