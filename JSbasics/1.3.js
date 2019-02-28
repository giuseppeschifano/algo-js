const readlineSync = require("readline-sync");

let firstName = readlineSync.question('Can you give me your firstame please?');

console.log('Hello, ' + firstName );
