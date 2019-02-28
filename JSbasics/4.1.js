
const readlineSync = require("readline-sync");

var height = new Number(readlineSync.question('give me the height of your rectangle: '));
var width = new Number(readlineSync.question('give me the width of your rectangle: '));

function calcSurface(height, width) {
	return height * width;
}

console.log('Total surface is: ' + calcSurface(height, width));


// first we need to declare a function 'calcSurface' that contains the height (H) and the width (W) of our rectangle
// in the return we specify that we need to multiply  H * W
// we need to ask 2 questions to the user about the H and W
// at the end of our script we display the result with the console.log




