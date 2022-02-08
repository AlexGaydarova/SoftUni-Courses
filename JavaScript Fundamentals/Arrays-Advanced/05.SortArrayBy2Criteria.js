function sortByTwoCriteria(input) {
  // input.sort((a,b) => {
  //   let firstCriteria = a.length - b.length;
  //   let secondCriteria = a.localeCompare(b);

  //   return firstCriteria || secondCriteria;
  // });

  input.sort((a,b) => a.length - b.length || a.localeCompare(b));
  return input.join('\n');
}

console.log(sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]));



function sortArray(input) {
    input.sort(twoCriteriaSort);
    input.forEach(el => console.log(el));
  
    function twoCriteriaSort(cur, next) {
      if (cur.length === next.length) {
        return cur.localeCompare(next);
      }
      return cur.length - next.length;
    }
  }


// function sortArray(input) {
//     const twoCriteriaSort = (cur, next) =>
//         cur.length - next.length || cur.localeCompare(next);
//     input.sort(twoCriteriaSort);
//     console.log(input.join('\n'));
// }

// sortArray(["Isacc", "Theodor", "Jack", "Harrison", "George"]);