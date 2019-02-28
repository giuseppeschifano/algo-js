const readlineSync = require("readline-sync");

let firstNumber = new Number(readlineSync.question('give me an integer number:'));
let secondNumber = new Number(readlineSync.question('give me another integer number:'));
let result= Math.floor(firstNumber / secondNumber);
let remainder= (firstNumber % secondNumber);

console.log('first/second = ' + result);
console.log('remainder = ' + remainder);


