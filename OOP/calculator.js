class Calculator {
  constructor() {
    //this.result = 0;
  }

  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (b === 0) {
      return "Error: Division by zero";
    }
    return a / b;
  }
}

//test
const calc = new Calculator();

console.log(calc.add(5, 8));
console.log(calc.subtract(8, 5));
console.log(calc.multiply(5, 5));
console.log(calc.divide(3, 2));

class AdvancedCalculator extends Calculator {
  square(a) {
    return a * a;
  }
  squareRoot(a) {
    return Math.sqrt(a);
  }
  power(a, b) {
    return Math.pow(a, b);
  }
  modulus(a, b) {
    return a % b;
  }
}

// Test
const advCal = new AdvancedCalculator();
console.log(advCal.square(23));
console.log(advCal.square(9));
console.log(advCal.power(2, 89));
console.log(advCal.modulus(10, 3));

class InteractiveCalculator extends AdvancedCalculator {
  constructor() {
    super();
  }
  start() {
    while (true) {
      let operation = prompt("Enter operation(+,-,*,/,^,sqrt,sq,mod,exit): ");
      if (operation === "exit") break;

      let num1 = parseFloat(prompt("Enter first number: "));
      let num2 =
        operation === "sqrt" || operation === "sq"
          ? null
          : parseFloat(prompt("Enter second number: "));
      let result;
      switch (operation) {
        case "+":
          result = this.add(num1, num2);
          break;
        case "-":
          result = this.subtract(num1, num2);
          break;
        case "*":
          result = this.multiply(num1, num2);
          break;
        case "/":
          result = this.divide(num1, num2);
          break;
        case "^":
          result = this.power(num1, num2);
          break;
        case "sqrt":
          result = this.squareRoot(num1);
          break;
        case "sq":
          result = this.square(num1);
          break;
        case "mod":
          result = this.modulus(num1, num2);
          break;
        default:
          result = "Invalid Operation";
      }
      console.log(`Result: ${result}`);
    }
  }
}

const interactiveCalc = new InteractiveCalculator();
interactiveCalc.start();
