
const readlineSync = require("readline-sync");
let number = parseInt (readlineSync.question('give a positive random number: '));

var arr = [];
let i = 1;
// var x = (number / i);

while (i <= number) {
if ((number % i == 0)) {
    // if ((number % i == 0) && (i != 1) && (i != number)) {
    if ((i != 1) && (i != number)) {
    arr.push(number / i);
    }
    console.log("i= " + i + " | x= " + (number / i));
}
i = i + 1;
}
console.log(arr);

