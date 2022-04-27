function arrayManipulator(numbers, commands) {
    for (let command of commands) {
        let tokens = command.split(' ');
 
        if (tokens[0] === 'add') {
            let idx = Number(tokens[1]);
            let element = Number(tokens[2]);
            numbers.splice(idx, 0, element);
        } else if (tokens[0] === 'addMany') {
            let idx = Number(tokens[1]);
            tokens.splice(0, 2);
            let numbersToAdd = tokens.map(Number);
            numbers.splice(idx, 0, ...numbersToAdd);
        } else if (tokens[0] === 'contains') {
            let result = numbers.indexOf(Number(tokens[1]));
            console.log(result);
        } else if (tokens[0] === 'remove') {
            let idx = Number(tokens[1]);
            numbers.splice(idx, 1);
        } else if (tokens[0] === 'shift') {
            let positions = Number(tokens[1]);
            for (let i = 0; i < positions; i++) {
                let firstNumber = numbers.shift();
                numbers.push(firstNumber);
            }
        } else if (tokens[0] === 'sumPairs') {
            let resultArray = [];
            if (numbers.length % 2 !== 0) { // aко броя на числата в масива са нечетни
                numbers.push(0); // добавяме една нула накрая, за да я съберем с последното число.
            }
            for (let i = 0; i < numbers.length - 1; i += 2) {
                let sum = numbers[i] + numbers[i + 1];
                resultArray.push(sum);
            }
            numbers = resultArray;
        } else if (tokens[0] === 'print') {
            console.log(`[ ${numbers.join(', ')} ]`);
            return;
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']);


    function arrayManipulator(arr, commands) {
        let actions = {
            add: (i, e) => add(i, e),
            addMany: (i, e) => add(i, e),
            contains: i => contains(i),
            shift: p => shift(p),
            remove: i => remove(i),
            sumPairs: sumPairs,
            print: print,
        }
        let printed = false
     
        function add(i, e) {
            arr.splice(Number(i), 0, ...e.map(x => Number(x)))
        }
     
        function contains(e) {
            console.log(arr.findIndex(x => x === Number(e)))
        }
     
        function remove(i) {
            arr.splice(i, 1)
        }
     
        function shift(p) {
            for (let j = 0; j < p; j++) {
                let element = arr.shift()
                arr.push(element)
            }
        }
     
        function sumPairs() {
            let result = []
            for (let i = 0; i < arr.length; i += 2) {
                result.push(arr[i + 1] ? arr[i] + arr[i + 1] : arr[i])
            }
            arr = result
        }
     
        function print() {
            printed = true
            if (arr.length > 0) {
                console.log(`[ ${arr.join(", ")} ]`)
            } else {
                console.log(`[]`)
            }
        }
     
        commands.forEach(x => {
            if (!printed) {
                let [action, param1, ...param2] = x.split(" ")
                actions[action](Number(param1), param2)
            }
        })
    }