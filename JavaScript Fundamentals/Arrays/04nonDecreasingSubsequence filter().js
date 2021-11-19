function nonDecreasing(arr) {
    let max = arr[0];
    let result = arr.filter(el => {
        if (el >= max) {
            max = el;
            debugger;
        }
        return el >= max;
    });
    console.log(result.join(' '));
}
nonDecreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]);

// function solve(arr) {
//     console.log(arr.filter((el, index) => el >= Math.max(...arr.slice(0, index))).join(' '));
// } // кратък начин.