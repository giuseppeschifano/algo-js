
const readlineSync = require("readline-sync");
let number = parseInt (readlineSync.question('give a positive random number: '));

var randomNumbers = [];
let i = 1;

while (i <= number) {
    randomNumbers.push((Math.floor(Math.random() * 333) + 1));
    i = i + 1;
}

console.log(randomNumbers);
randomNumbers.sort();
console.log(randomNumbers);

function sortNumbers(a, b) {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
}

randomNumbers.sort(sortNumbers);
console.log(randomNumbers);

