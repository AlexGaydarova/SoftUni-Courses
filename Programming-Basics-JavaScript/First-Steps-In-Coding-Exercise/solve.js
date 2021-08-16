function solve(){
    let name = "Maria"
    console.log("Hello " + name + "!");
}

function solve(input) {
    let name = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    console.log(`Hello ${name} ${lastName} ${age}!`);
}

solve(["Alex", "Gaydarova", "30"]);
    


