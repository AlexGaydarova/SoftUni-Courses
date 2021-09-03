function building(input) {
    let countFloors = Number(input[0]);
    let countRooms = Number(input[1]);

    for (let i = countFloors; i > 0; i--) {
        let str = "";
        for (let j = 0; j < countRooms; j++) {
            if (i == countFloors) { //най-високия етаж или ако е 1.
                str += `L${i}${j} `; //  с разстояние.
            } else {
                if (i % 2 == 0) { // четно офиси
                    str+=`O${i}${j} `;
                } else { // нечетно апартамент
                    str+=`A${i}${j} `;
                }
            }
        }
        console.log(str);
    }
}

building(["6", "4"]);