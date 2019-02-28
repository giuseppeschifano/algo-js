const readlineSync = require("readline-sync");

let userName = readlineSync.question('Can you give me your name please?');
let firstName = readlineSync.question('Can you give me your first name please?');
let cityName = readlineSync.question('Can you give me the city you live in?');

console.log('Hello, your name is ' + userName + ', your first name is ' + firstName + ' and you live in ' + cityName);
