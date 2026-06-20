const prompt = require("prompt-sync")();
let numbers = [];

let n = Number(prompt("How many numbers do you want to enter? (stop with 0) "))
while (true) {
    if (n == 0) {
        break;
    }
    for (i = 0; i<n; i++) {
        let num = Number(prompt(`Enter Number ${i+1} :`))
        numbers.push(num)
    }    
}
console.log(numbers)
