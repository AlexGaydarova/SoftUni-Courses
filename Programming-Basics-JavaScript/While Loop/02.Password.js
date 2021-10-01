function password(input) {
    let username  = input[0];
    let password = input[1];
    let current = input[2]; //въведената от потребителя парола за вход
    let index = 3; // counter - индекса на текущия елемент в масива. Тъй като вече сме присвоили първите три елемента
//В while цикъл, до въвеждане на валидна парола, четете нова и повишавайте counter с 1:
    while (current !== password) {
        current = input[index];
        index++
    }
    console.log(`Welcome ${username}!`);
}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"]);