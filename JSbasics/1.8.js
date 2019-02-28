
const readlineSync = require("readline-sync");

let result = 3

let firstName = readlineSync.question('give me your first name:');
result= result - 1;
console.log('remaining quesions: ' + result);

let birthCity = readlineSync.question('give me your birth city:');
result= result - 1;
console.log('remaining questions: ' + result);

let birthYear = readlineSync.question('give me your birth year:');
result= result - 1;
console.log('remaining questions: ' + result);

console.log('your first name is ' + birthCity + ', your shoe size is ' + birthYear + ' and your city of birth is ' + firstName);



