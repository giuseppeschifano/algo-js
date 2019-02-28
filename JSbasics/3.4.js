
let arr = [1, 2, 3, 4];
let maxNumb= 0;
let minNumb= 0;
maxNumb = Math.max.apply(null, arr);
minNumb = Math.min.apply(null, arr);

console.log('max = ' + maxNumb);
console.log('min = ' + minNumb);


