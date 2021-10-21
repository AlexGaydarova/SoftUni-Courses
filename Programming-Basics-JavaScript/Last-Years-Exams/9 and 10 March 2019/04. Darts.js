function darts(input) {
    let name = input[0];
    let index = 1;
    let pointsPlayer = 301;
    let counter1 = 0;
    let counter2 = 0;
    while (true) {
        if (pointsPlayer == 0) {
            console.log(`${name} won the leg with ${counter1} shots.`);
            break;
        } else if (input[index] == "Retire") {
            console.log(`${name} retired after ${counter2} unsuccessful shots.`);
            break;
        }
        let sector = input[index];
        index++;
        let tempPointsPlayer = Number(input[index]);
        index++;
            if (sector == "Single") {
                tempPointsPlayer = tempPointsPlayer;
            } else if (sector == "Double") {
                tempPointsPlayer = tempPointsPlayer * 2;
            } else {
                tempPointsPlayer = tempPointsPlayer * 3;
            }
            if (tempPointsPlayer > pointsPlayer) { // neuspeshen
                counter2++;
            } else { // uspeshen
                counter1++;
                pointsPlayer -= tempPointsPlayer;
        }
    }
}

//darts(["Michael van Gerwen","Triple","20","Triple","19","Double","10",
//"Single","3","Single","1","Triple","20","Triple","20","Double","20"]);
darts(["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"])