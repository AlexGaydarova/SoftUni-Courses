function cinemaTickets(inputArr) {
    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;
    let totalTickets = 0;
    for (let i=0; i < inputArr.length; i++) {
        if (inputArr[i] == "Finish" || inputArr[i] == "End") {
            break;
        }
        let movieTitle = inputArr[i];
        i++;
        let freeSeats = Number(inputArr[i]);
        i++;
        let currentMovieTickets = 0;
        while(inputArr[i] != "End" && inputArr[i] != "Finish") {
            totalTickets+=1;
            currentMovieTickets+=1;
            switch(inputArr[i]) {
                case "standard":
                    standardTickets+=1;
                    break;
                case "student":
                    studentTickets+=1;
                    break;
                case "kid":
                    kidsTickets+=1;
                    break;
            }
            if (currentMovieTickets == freeSeats) {
                break;
            }
            i++;
        }
        console.log(
            `${movieTitle} - ${((currentMovieTickets/freeSeats) * 100).toFixed(2)}% full.`);        
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets/ totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets/ totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidsTickets/ totalTickets) * 100).toFixed(2)}% kids tickets.`);
}