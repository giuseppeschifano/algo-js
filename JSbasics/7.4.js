const readlineSync=require("readline-sync");

let option;
let add;
let remove;
let pizzas = [];

displayMenu();

function displayMenu() {

  console.log('\033[2J');  // [2J
  console.log("Hello! Welcome to the Pizza Flavors Manager." + '\n');
  console.log("Please choose your actions:" + '\n');
  console.log("1 - List all the pizza flavors" + '\n');
  console.log("2 - Add a new pizza flavor" +'\n');
  console.log("3 - Remove a pizza flavor" + '\n');
  console.log("4 - Exit this program" + '\n');

  option = new Number(readlineSync.question("Enter your action's number: "));

  if(option == 1) { 
    displayPizza(); }
  else if(option == 2) { 
    addPizza(); }
  else if(option == 3) { 
    removePizza(); }
  else if(option == 4) { 
  }
  else { 
    displayMenu(); 
  }
}

function displayPizza() {
  console.log("Pizza flavors: " + '\n');
    if(pizzas.length == 0) {
      console.log("No pizzas saved yet !");
    } 
    else {
      pizzas.forEach(function(flavor) { console.log(flavor); });
    }
  readlineSync.keyInPause();
    displayMenu();
}

function addPizza() {
  add = readlineSync.question("Add a new pizza flavor: ");
    if(add.length != 0) {
      pizzas.push(add);
    }
  displayMenu();
}

function removePizza() {
  pizzas.forEach(function(flavor) { console.log(flavor + '\n');});
  remove = readlineSync.question("Remove a pizza flavor from the list above: ");
    if(remove.length != 0) {
      var index = pizzas.indexOf(remove);
    if (index > -1) {
      pizzas.splice(index, 1);
    }
  }
  displayMenu();
}

