function pipesInPool(input) {
    let v = Number(input[0]); //Обем на басейна в литри 
    let p1 = Number(input[1]); //дебит на първата тръба за час 
    let p2 = Number(input[2]); //дебит на втората тръба за час 
    let h = Number(input[3]); //часовете които работникът отсъства 
    let p1Sum = h * p1;
    let p2Sum = h * p2;
    let totalP = p1Sum + p2Sum;
    if (totalP <= v ) {
        procentTotal = totalP / (v / 100);
        procentP1 = p1Sum / (totalP / 100);
        procentP2 = p2Sum / (totalP / 100);
        console.log(`The pool is ${procentTotal.toFixed(2)}% full. Pipe 1: ${procentP1.toFixed(2)}%. Pipe 2: ${procentP2.toFixed(2)}%.`);
    } else if (totalP > v) {
        waterOver = totalP - v;
        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${waterOver.toFixed(2)} liters.`);
    }
}
pipesInPool(["1000", "100", "120", "3"]);
pipesInPool(["100", "100", "100", "2.5"]);