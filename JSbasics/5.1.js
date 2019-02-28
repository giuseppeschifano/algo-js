const readlineSync = require("readline-sync");

let a = (readlineSync.question('give name of the TV-serie : '));
let b = (readlineSync.question('give the production year  : '));
let c = (readlineSync.question('give name of cast member_1: '));
let d = (readlineSync.question('give name of cast member_2: '));
let e = (readlineSync.question('give name of cast member_3: '));

function askTvSerie(){

let TvSerie = {
  "name": a,
  "prodYear": b,
  "namesCast": {
      "nameCast1": c,      
      "nameCast2": d,
      "nameCast3": e }
}
console.log(TvSerie);
var myJSON = JSON.stringify(TvSerie);
console.log(myJSON);
}
askTvSerie();

