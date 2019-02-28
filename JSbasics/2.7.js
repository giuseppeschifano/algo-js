
const readlineSync = require("readline-sync");

let firstNumber = new Number(readlineSync.question('give me a random number 1 - 5: '));
let secondNumber = new Number(readlineSync.question('enter a number 1 - 10: '));
let result=secondNumber;
let i=firstNumber;

do  {

secondNumber = new Number(readlineSync.question('enter a number 1 - 10: '));
i=i - 1;
result = result + secondNumber;

console.log('Totaal= ' + result);
console.log('i= ' + i);

}
while ( i > 1 );



