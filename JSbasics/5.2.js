const readlineSync = require("readline-sync");

let a = (readlineSync.question('give name of the TV-serie : '));
let b = (readlineSync.question('give the production year  : '));
let c = (readlineSync.question('give name of cast member_1: '));
let d = (readlineSync.question('give name of cast member_2: '));
let e = (readlineSync.question('give name of cast member_3: '));

let TvSerie = {
  "name": a,
  "prodYear": b,
//  "namesCast": {
      "nameCast1": c,      
      "nameCast2": d,
      "nameCast3": e }
//}

function askTvSerie() {
console.log("--*--");
console.log(TvSerie);
console.log("--1--");
var myJSON = JSON.stringify(TvSerie);
console.log(myJSON);
console.log("--2--");
var myObject = eval('[' + myJSON + ']');
console.log(myObject);
console.log("--3--");
delete TvSerie.name;
delete TvSerie.prodYear;

// Put values of myJSON in an array
var arrTV = Object.values(TvSerie);

console.log(arrTV);
console.log("--4--");

// shuffle

function shuffle(arrTV) {
  var currentIndex = arrTV.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arrTV[currentIndex];
    arrTV[currentIndex] = arrTV[randomIndex];
    arrTV[randomIndex] = temporaryValue;
  }
  return arrTV;
}

// shuffle

arrTV = shuffle(arrTV);
console.log(arrTV);
console.log("--5--");
arrTV = shuffle(arrTV);
console.log(arrTV);
console.log("--6--");
}

askTvSerie();

//test
//var cast = {
//  "name": a,
//  "prodYear": b,
//  "namesCast": {
//      "nameCast1": c,      
//      "nameCast2": d,
//      "nameCast3": e }
//};
// Random Key
// Random Value
//console.log(Object.keys(cast));
//console.log(Object.keys(cast)[Math.floor(Math.random()*Object.keys(cast).length)]);
//console.log(cast[Object.keys(cast)[Math.floor(Math.random()*Object.keys(cast).length)]]);








