//Create an espresso machine class that makes machines with 4 properties and 3 methods

class EspressoMachine {
  constructor(color, make, model, price) {
    this.color = color;
    this.make = make;
    this.model = model;
    this.price = price;
  }
  turnOn() {
    console.log("Good day, I am now on!");
  }
  steam() {
    console.log("Its SUMMERRR SaLLEE 50%%%%");
  }
  brew() {
    console.log("Good Stuff Coming your way!!!!!!!!!");
  }
}
