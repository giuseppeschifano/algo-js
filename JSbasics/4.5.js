
function calcDistance(x1, y1, x2, y2) {        
	return parseFloat(Math.hypot(x2-x1, y2-y1)).toFixed(2);
}

console.log('the calculated distance <10,1,20,2> is: ' + calcDistance (10,1,20,2));
console.log('the calculated distance <10,1,30,1> is: ' + calcDistance (10,1,30,1));
console.log('the calculated distance <40,1,10,1> is: ' + calcDistance (40,1,10,1));
console.log('the calculated distance <-20,2,20,-2> is: ' + calcDistance (-20,2,20,-2));



// first we need to declare a function calcDistance
// then the return of the calculation
// at last display the results




