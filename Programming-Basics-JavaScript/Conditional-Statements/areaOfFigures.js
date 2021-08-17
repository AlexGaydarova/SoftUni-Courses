function areaOfFigures(input) {
    let shape = input[0];
    if (shape === "square") {
        let side = Number(input[1]);
        let area = side * side;
        console.log(area.toFixed(3));
    }else if (shape === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        let area = sideA *sideB;
        console.log(area.toFixed(3));
    }else if (shape === "circle") {
        let r = Number(input[1]);
        let area = Math.PI * r * r; //Лице = π * r * r
        console.log(area.toFixed(3));
    }else if (shape === "triangle") {
        let side1 = Number(input[1]);
        let h = Number(input[2]);
        let area = side1 * h /2;
        console.log(area.toFixed(3));
    }
}
//areaOfFigures(["square", "5"]);
//areaOfFigures(["rectangle", "7", "2.5"]);
//areaOfFigures(["circle", "6"]);
areaOfFigures(["triangle", "4.5", "20"]);
