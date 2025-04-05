class Calculator {
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
    if (b == 0) {
      return "Error: Division by zero";
    }
    return a / b;
  }
}

// TEST

calc = new Calculator();

console.log(calc.add(5, 10));
console.log(calc.subtract(10, 5));
console.log(calc.multiply(2, 5));
console.log(calc.divide(5, 0));

// Advanced Calculator

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

// TEST

advancedCalc = new AdvancedCalculator();
console.log(advancedCalc.square(10));
console.log(advancedCalc.squareRoot(10));
console.log(advancedCalc.power(20, 2));
console.log(advancedCalc.modulus(10, 2));

// Interactive Calculator

class InteractiveCalculator extends AdvancedCalculator {
  constructor() {
    super();
  }
  start() {
    while (true) {
      let operation = prompt("Enter operation: +,-,*,/,^,%,sq,sqrt, exit");
      if (operation === "exit") break;

      let num1 = parseFloat(prompt("Enter first number"));
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
        case "%":
          result = this.modulus(num1, num2);
          break;
        case "sq":
          result = this.square(num1);
          break;
        case "sqrt":
          result = this.squareRoot(num1);
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
