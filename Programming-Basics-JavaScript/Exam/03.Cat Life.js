function catLife(input) {
    let poroda = input[0];
    let gender = input[1];
    let months = 0;

    switch (poroda) {
        case "British Shorthair":
            switch (gender) {
                case "m":
                    months = (13 * 12) / 6;
                    console.log(`${Math.floor(months)} cat months`);
                    break;
                case "f":
                    months = (14 * 12) / 6;
                    console.log(`${Math.floor(months)} cat months`);
                    break;  
            }
            break;
        case "Siamese":
            switch (gender) {
                case "m":
                    months = (15 * 12) / 6;
                    console.log(`${Math.floor(months)} cat months`);
                    break;
                case "f":
                    months = (16 * 12) / 6;
                    console.log(`${Math.floor(months)} cat months`);
                    break;  
            }
            break;
        case "Persian":
            switch (gender) {
                case "m":
                    months = (14 * 12) / 6;
                    console.log(`${Math.floor(months)} cat months`);
                    break;
                case "f":
                    months = (15 * 12) / 6;
                    console.log(`${Math.floor(months)} cat months`);
                    break;  
            }
            break;
        case "Ragdoll":
            switch (gender) {
                case "m":
                    months = (16 * 12) / 6;
                    console.log(`${Math.floor(months)} cat months`);
                    break;
                case "f":
                    months = (17 * 12) / 6;
                    console.log(`${Math.floor(months)} cat months`);
                    break;  
            }
            break;
        case "American Shorthair":
            switch (gender) {
                case "m":
                    months = (12 * 12) / 6;
                    console.log(`${Math.floor(months)} cat months`);
                    break;
                case "f":
                    months = (13 * 12) / 6;
                    console.log(`${Math.floor(months)} cat months`);
                    break;  
            }
            break;
        case "Siberian":
            switch (gender) {
                case "m":
                    months = (11 * 12) / 6;
                    console.log(`${Math.floor(months)} cat months`);
                    break;
                case "f":
                    months = (12 * 12) / 6;
                    console.log(`${Math.floor(months)} cat months`);
                    break;  
            }
            break;
        default:
            console.log(`${poroda} is invalid cat!`);
            break;           
    }
}
catLife(["Tom",
"m"])