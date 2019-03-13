class Circle {
  constructor(xPos, yPos, radius) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
  }
  get surface() {
    return this.xPos + " / " + this.yPos + " / " + this.radius;
  }
  set surface(val) {
    this.xPos = val.split()[0];
    this.yPos = val.split()[1];
    this.radius = val.split()[2];
  }
  talk() {
    console.log("x= " + this.xPos + " y= " + this.yPos + " r= " + this.radius + " surface: " + parseFloat((Math.pow(this.radius, 2)) * Math.PI).toFixed(2));
  }
}

//

let opp = new Circle(3, 2, 4);

console.log("x      : " + opp.xPos); 
console.log("y      : " + opp.yPos); 
console.log("radius : " + opp.radius);
opp.talk();
opp.xPos += + 2;
opp.yPos += + 2;
opp.radius +=  + 2;
console.log("x      : " + opp.xPos); 
console.log("y      : " + opp.yPos); 
console.log("radius : " + opp.radius);
opp.talk();
console.log("-------------------"); 
// 
console.log("x² + y²     :  " + (Math.pow(opp.xPos, 2) + Math.pow(opp.yPos, 2)) ); 
console.log("sqrt (x²+y²):  " + (parseFloat(Math.sqrt(Math.pow(opp.xPos, 2) + Math.pow(opp.yPos, 2))).toFixed(2)) ); 
console.log("r² * 3.1416 :  " + (parseFloat(Math.pow(((parseFloat(Math.sqrt(Math.pow(opp.xPos, 2) + Math.pow(opp.yPos, 2))).toFixed(2))), 2)) * 3.14159).toFixed(2) );


