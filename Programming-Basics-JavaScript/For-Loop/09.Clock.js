function solve() {
    for (let hour = 0; hour <= 23; hour++) {
        for (let minutes = 0; minutes <= 59; minutes++) {
            let result = "";                
            result += `${hour} : ${minutes}\n`
            console.log(result.slice(0, -1)); // махаме последният нов ред от резултата.
        }
    }
}
solve()

