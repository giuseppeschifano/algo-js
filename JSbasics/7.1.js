
const readlineSync = require("readline-sync");

let luckyNumber = parseInt (readlineSync.question('guess my number: '));
let randomNumber = Math.floor((Math.random() * 10) + 1); 

while (luckyNumber !== randomNumber) {
    if ( luckyNumber < randomNumber ) {
        console.log('Too LOW - Try again !!');	
    } 
    else if ( luckyNumber > randomNumber ) {
        console.log('Too HIGH - Try again !!');	
    }
    luckyNumber = parseInt(readlineSync.question('guess my number: '));
}
console.log('You WIN !!');
