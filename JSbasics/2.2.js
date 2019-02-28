
const readlineSync = require("readline-sync")

let min = new Number(readlineSync.question('give me a min number: '));
let max = new Number(readlineSync.question('give me a max number: '));
let current = new Number(readlineSync.question('give me a current number: '));


if ((current >= max) || (current <= min)) {
console.log("You probably did not understand this exercize: ");
} else {console.log("You  understand this exercize: ");
}



