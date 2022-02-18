function searchNumber(arr1, arr2) {
    let  [elementsTake, elementsDelete, numberSearch] = arr2;
    let slice = arr1.slice(0,elementsTake)
    slice.splice(0, elementsDelete);
    let count = 0;

    for (num of slice) {
        if (num == numberSearch) {
            count++;
        }
    }
     
    return `Number ${numberSearch} occurs ${count} times.`
}

console.log(searchNumber([5, 2, 3, 4, 1, 6],[5, 2, 3]));