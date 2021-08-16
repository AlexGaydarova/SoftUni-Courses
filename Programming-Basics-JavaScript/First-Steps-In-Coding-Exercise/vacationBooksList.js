function vacationBooksList(input) {
    let numPages = Number(input[0]);
    let numPagesForHour = Number(input[1]);
    let days = Number(input[2]);
    let totalReadingTime = numPages / numPagesForHour;
    let hoursForDay = totalReadingTime / days;
    console.log(hoursForDay);
}
vacationBooksList(["212","20","2"]);
vacationBooksList(["432","15","4"]);

//1.Брой страници, 2.Страници, които може да прочита за 1 час , 3.Броя на дните, за които трябва да прочете книгата 
//1. изчисляваме общото време за четене на книгата: 212 / 20 = 10.6 часа
//2. получения резултат делим на броя дни, за да получим необходимите часове на ден:
// 10.6 часа / 2 дни = 5.3 часа на ден
