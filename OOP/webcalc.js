class WebCalculator {
  constructor() {
    this.display = document.getElementById("display");
  }
  appendValue(value) {
    this.display.value += value;
  }
  clearDisplay() {
    this.display.value = "";
  }
  calculateResult() {
    try {
      this.display.value = eval(this.display.value);
    } catch {
      this.display.value = "Error";
    }
  }
}

// Initializing a new calculator

const calculator = new WebCalculator();

function appendValue(value) {
  calculator.appendValue(value);
}

function clearDisplay() {
  calculator.clearDisplay();
}
function calculateResult() {
  calculator.calculateResult();
}
