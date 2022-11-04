function passValidator(password){
    let enoughLength = false;
    let onlyLetterAndDigits = true;
    let digits = 0;
    if(password.length >= 6 && password.length <= 10){
        enoughLength = true;
    }
    for(let i = 0; i < password.length; i++){
        if(password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57){    // digits
            digits++;
        } else if((password[i].charCodeAt(0) >= 65 && password[i].charCodeAt(0) <= 90) || (password[i].charCodeAt(0) >= 97 && password[i].charCodeAt(0) <= 122)){    // letters
            continue;
        } else {
            onlyLetterAndDigits = false;
        }
 
    }
    if(enoughLength === true && digits >= 2 && onlyLetterAndDigits === true){
        console.log("Password is valid");
    } else{
        if(!enoughLength){
            console.log("Password must be between 6 and 10 characters");
        }
        if(!onlyLetterAndDigits > 0){
            console.log("Password must consist only of letters and digits");
        }
        if(digits < 2){
            console.log("Password must have at least 2 digits");
        }    
    }
    
}
//passValidator('logIn');


function passwordValid(password) {

    function isLength6To10(string) {
        if (string.length >= 6 && string.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function isOnlyLetteresAndDigits (string) {
        for (let char of string) {
            let charCode = char.charCodeAt(0); // превръщаме силвола в число от ASCIII table

            if (!(charCode >= 48 && charCode <= 57) && //не е цифра
                !(charCode >= 65 && charCode <= 90) && // не е главна буква
                !(charCode >= 97 && charCode <= 122)) // не е малка буква.
                {
                    return false;
                }
        }
        return true; // отговаряме на условието, т.е., не сме минали през горния иф.
    }

    function hasAtleastTwoDigits(string) {
        let counter = 0;

        for (let char of string) {
            let charCode = char.charCodeAt(0);
            if (charCode >= 48 && charCode <= 57) { // имаме число
                counter++;
            }
        }
        return counter >= 2 ; // еквивалентно е.
        // if (counter >= 2) {
        //     return true;
        // } else {
        //     return false;
        // }
    }

    let isLengthValid = isLength6To10(password); // подаваме  името на функцията.
    let isLettersAndDigits = isOnlyLetteresAndDigits(password);
    let containsAtLeastTwoDigits = hasAtleastTwoDigits(password);

    if (isLengthValid && isLettersAndDigits && containsAtLeastTwoDigits) {
        console.log("Password is valid");
    }

    if (!isLengthValid) { // === false
        console.log("Password must be between 6 and 10 characters");
    } 
    if (!isLettersAndDigits) {
        console.log("Password must consist only of letters and digits");
    }

    if (!containsAtLeastTwoDigits) {
        console.log("Password must have at least 2 digits");
    }
}

passwordValid('logIn');

