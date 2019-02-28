const readlineSync = require("readline-sync");

let firstNumber = new Number(readlineSync.question('give me your shoe size:'));
let secondNumber = new Number(readlineSync.question('give me your birth year:'));

let result= (firstNumber * 2);
console.log(result);

result= (result + 5);
console.log(result);

result= (result * 50);
console.log(result);

result= (result - secondNumber);
console.log(result);

result= (result + 1766);
console.log(result);


