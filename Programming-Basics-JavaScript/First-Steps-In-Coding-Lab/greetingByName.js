function greetingByName(input) {
    let name = input[0];
    let greeting = "Hello, " + name;
    console.log(greeting);
}
greetingByName(["Svetlin Nakov"]);


function greeting(input) {
    let name = input[0];
    console.log(`Hello, ${name}!`);
}
greeting(["Alex"]);