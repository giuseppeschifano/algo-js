
var i = Math.floor((Math.random() * 10) + 1);

function multiRand10(i) {        
	return i;
}

function rand10(x) {        
	return x;
}

while (i > 1) {

multiRand10(i = i - 1);
console.log('Your multiRandom number is: ' + multiRand10(i));

rand10(x = Math.floor((Math.random() * 10) + 1));
console.log('Your random number is: ' + rand10(x));
}

// first we need to declare a variable i (sort of counter)
// then a function rand10(x) and 'multiRand10' that contains the variable we just declared (i)
// (i) wil be decreasing after every loop (i = i - 1) till the loop stops
// each time in the loop we display the random results for (x), and the decreasing (i)




