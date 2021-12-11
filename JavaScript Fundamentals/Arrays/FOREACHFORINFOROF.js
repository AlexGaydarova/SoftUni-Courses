const arr= [1,2,3,'lalal'];

arr[8] = 6;
arr['Pesho'] = 89;
arr[-9] = 5

arr.forEach((el, i, arr) => console.log(el)); // вади само читавите елементи.
//arr.forEach(function(el, i, arr){ console.log(el)}); същото като горното.
 
arr.forEach((x, i, arr) => arr[i] = x - 1); // намаляме всички елементи в масива с 1.


for ( let item of arr ) { // вади елемента с всички undifined
    console.log(item)
}

for (let item in arr) { // вади индекса
    console.log(item)
}

console.log(arr.reduce((a,b) => a + b, 0));// initial value - 0 - събиране, 1 - умножение

