function sumPrimeNonPrime(input) {
    let index = 0;
    let comand = input[index];
    index++;

    let sumPrimeNum = 0; // прости числа
    let sumNotPrimeNum = 0;// сложни числа

    while (comand != "stop") {
        let num = Number(comand);

        if (num < 0) {
            console.log(`Number is negative.`);
            comand = input[index];
            index++;
            continue; // не се изпълнява кода надлу. Връща ни на while.
        }

        if (num == 1) { // Просто число - дели се на 1 и на себе си.
            sumPrimeNum += num;
            comand = input[index];
            index++;
            continue;
        }
        let isPrime = true; // флаг просто ли е - да. 

        for (i = 2; i <= Math.sqrt(num); i++) { //поваме от 2, защто 1 вече го разгледахме.
            if (num % i == 0) { // пр. 4 % 2 == 0 , ако да, значи не е просто.
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sumPrimeNum += num; //значи е просто число - добави към сумата.
        } else {
            sumNotPrimeNum += num; // значи е сложно.
        }
        comand = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNum}`);
    console.log(`Sum of all non prime numbers is: ${sumNotPrimeNum}`);
}

//sumPrimeNonPrime(["3","9","0","7","19","4","stop"]);
//sumPrimeNonPrime(["30","83","33","-1","20","stop"]);
sumPrimeNonPrime(["0","-9","0","stop"]);
