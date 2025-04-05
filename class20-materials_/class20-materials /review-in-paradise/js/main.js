// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood;
favFood = "Rice and Stew";
alert(favFood);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let aStr = "Saleh";
alert(aStr.charAt(1));

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divideAndMulti(n1, n2, n3) {
  alert((n1 / n2) * n3);
}
divideAndMulti(20, 10, 5);
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(n1) {
  console.log(Math.cbrt(n1));
}
cubeRoot(9);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function checkForSummer(month) {
  let monthLowerCase = month.toLowerCase();
  if (
    monthLowerCase === "june" ||
    monthLowerCase === "july" ||
    monthLowerCase === "august"
  ) {
    alert("YAY");
  } else {
    alert("Booo");
  }
}

checkForSummer("january");

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function multpleOfFive(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 5 !== 0) {
      console.log(i);
    }
  }
}

multpleOfFive(10);
