// *Variables*
// Create a variable and console log the value
let num = 0;
console.log(num);

// Create a variable, add 10 to it, and alert the value
let addNum = 5;
addNum += addNum + 10;
console.log(addNum);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(n1, n2, n3, n4) {
  alert(n1 - n2 - n3 - n4);
}
sub4(310, 10, 10, 10);
// Create a function that divides one number by another and returns the remainder
function divideBy(n1, n2) {
  return n1 / n2;
}

console.log(divideBy(20, 4));
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoNums(n1, n2) {
  sum = n1 + n2;
  if (sum > 50) {
    alert("Jumanji");
  }
}

addTwoNums(50, 44);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function mulThreeNums(n1, n2, n3) {
  product = n1 * n2 * n3;

  if (product % 3 == 0) {
    alert("ZEBRA");
  }
}

mulThreeNums(9, 9, 9);
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function takesInWord(word, num) {
  for (let i = 1; i <= num; i++) {
    console.log(word);
  }
}

takesInWord("Hey", 5);
