class Rectangle {
  constructor(L1xPos, L1yPos, R1xPos, R1yPos, L2xPos, L2yPos, R2xPos, R2yPos ) {
    this.L1xPos = L1xPos;
    this.L1yPos = L1yPos;
    this.R1xPos = R1xPos;
    this.R1yPos = R1yPos;
    this.L2xPos = L2xPos;
    this.L2yPos = L2yPos;
    this.R2xPos = R2xPos;
    this.R2yPos = R2yPos;
    //this.result = result;
  }
  
  get coordinates() {
    return this.L1xPos + " " + this.L1yPos + " " + this.R1xPos + " " + this.R1yPos + this.L2xPos + " " + this.L2yPos + " " + this.R2xPos + " " + this.R2yPos;
  }
  set coordinates(val) {
    this.L1xPos = val.split()[0];
    this.L1yPos = val.split()[1];
    this.R1xPos = val.split()[2];
    this.R1yPos = val.split()[3];
    this.L2xPos = val.split()[4];
    this.L2yPos = val.split()[5];
    this.R2xPos = val.split()[6];
    this.R2yPos = val.split()[7];
    //this.result = val.split()[8];
  }

  talk() {
    console.log("L1x= " + this.L1xPos + " L1y= " + this.L1yPos + " R1x= " + this.R1xPos + " R1y= " + this.R1yPos + " L2x= " + this.L2xPos + " L2y= " + this.L2yPos + " R2x= " + this.R2xPos + " R2y= " + this.R2yPos );
  }
}
//                      L1x L1y R1x R1y 
//                                    L2x L2y R2x R2y

let coord = new Rectangle(2, 10, 10, 5, 7, 15, 15, 7);

if ( ((coord.L2xPos >= coord.L1xPos) && (coord.L2xPos <= coord.R1xPos)) && ((coord.R2yPos <= coord.L1yPos) && (coord.R2yPos >= coord.R1yPos)) ) {
  //return this.result = true;
  console.log("collapse = true");
  } else {
  //  return this.result = false;
  console.log("collapse = false");
  }

coord.talk();
//console.log(this.result);
