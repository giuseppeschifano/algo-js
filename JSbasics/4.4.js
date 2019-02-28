const readlineSync = require("readline-sync");
let x = new Number(readlineSync.question('give me a random number 1 - 7: '));

var arr = [];
for (var i=0, t=x; i<t; i++) {
    arr.push(Math.round(Math.random() * 100));
}

var sum = 0;
//var lenght = 0;

function average() {        
	return a;
}
function min() {        
	return b;
}
function max() {        
	return c;
}

sum = eval(arr.join("+"));
length = eval(arr.length);

average(a = (sum / t));
min(b = Math.min.apply(null, arr));
max(c = Math.max.apply(null, arr));

console.log('array     : [' + arr + ']');
console.log('sum       : ' + sum);
console.log('length    : ' + arr.length);
console.log('average   : ' + parseFloat(average(a)).toFixed(2));
console.log('min       : ' + min(b));
console.log('max       : ' + max(c));

// we ask the user a random number 1-7 (x)
// then we do a Math.random for (x) numbers to fill out the array
// after we declare the calculations we need: sum, lenght, ...
// at last we display the results
