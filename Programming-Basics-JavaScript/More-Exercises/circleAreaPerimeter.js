function circleAreaParameter(array) {
    let r = Number(array[0]);
    let area = r * r * Math.PI;
    let parameter = 2 * Math.PI * r;
    console.log(area.toFixed(2));
    console.log(parameter.toFixed(2));
    //console.log("<calculated area>" + area.toFixed(2));
    //console.log("<calculated parameter>" + parameter.toFixed(2));
}
circleAreaParameter(["3"]);
circleAreaParameter(["4.5"]);
//Лице = π * r * r  //Периметър = 2 * π * r