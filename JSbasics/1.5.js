const readlineSync = require("readline-sync");

let firstNumber = new Number(readlineSync.question('give me a decimal number:'));
let secondNumber = new Number(readlineSync.question('give me another decimal number:'));

let result= Math.floor(firstNumber) * secondNumber ;

console.log(result);

