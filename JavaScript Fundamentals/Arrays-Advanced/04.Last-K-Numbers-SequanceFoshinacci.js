function lastKNumbersSequance(n, k) {
    let result = [1]; 
    // create variable to hold result, starting wih 1;

    //repeat n times 
    for (let i = 1; i < n; i++) {
        //calculate next element
        //slice from result k elements from the end
        //sum sliced elements
        let current = 0;
        for (let num of result.slice(-k)) { // last elements 
            current += num;
        }
        //store element 
        result.push(current);
    }
    //print 
    console.log(result.join(' '));
}

lastKNumbersSequance(6, 3);