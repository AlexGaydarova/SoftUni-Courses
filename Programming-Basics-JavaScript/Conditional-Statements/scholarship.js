function scholarship(input) {
    let dohodLv = Number(input[0]);
    let sredenUspeh = Number(input[1]);
    let minZaplata = Number(input[2]);
    let stipendiqSocial = 0;
    let stipendiqOtlichen = 0;
    let isStipendiqSocial = false;
    if (dohodLv < minZaplata) {
        isStipendiqSocial = true;
    } if (sredenUspeh < 4.5) {
        isStipendiqSocial = false;
    } if (isStipendiqSocial) {
        stipendiqSocial = Math.floor(0.35 * minZaplata);
    } if (sredenUspeh >= 5.5) {
        stipendiqOtlichen = Math.floor(25 * sredenUspeh);
    } if (stipendiqSocial + stipendiqOtlichen == 0) {
        console.log(`You cannot get a scholarship!`)
    } else if (stipendiqOtlichen >= stipendiqSocial) {
        console.log(`You get a scholarship for excellent results ${stipendiqOtlichen} BGN`);
    } else if (stipendiqOtlichen < stipendiqSocial) {
        console.log(`You get a Social scholarship ${stipendiqSocial} BGN`);
    } 
}
scholarship(["480.00", "4.60", "450.00"]);
scholarship(["300.00", "5.65", "420.00"]);