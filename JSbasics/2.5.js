
const readlineSync = require("readline-sync");
let luckyNumber = parseInt (readlineSync.question('give me a lucky number: '));
// var answer=42;


while (luckyNumber !== 42){

	console.log('Bad guess - Try again !!');
	
	luckyNumber = parseInt(readlineSync.question('give me a lucky number: '));	 
}
  
console.log('You Win !!');




