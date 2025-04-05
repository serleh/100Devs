// *Variables*
// Declare a variable, assign it a value, and alert the value
let someValue = 5;
alert(someValue);

// Create a variable, divide it by 10, and console log the value
let someOtherValue = 20;
someOtherValue /= 10;
console.log(someOtherValue);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function mul3Nums(n1, n2, n3) {
  product = n1 * n2 * n3;
  alert(product);
}
mul3Nums(2, 2, 2);
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function takesIn4Nums(n1, n2, n3, n4) {
  console.log(n1 + n2 - n3 - n4);
}
takesIn4Nums(2, 3, 4, 5);

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third.
// If the value is greater then 25, console log "WE HAVE A WINNNA"
function takesIn3Nums(n1, n2, n3) {
  total = 100 + n1 - n2 / n3;
  if (total > 25) {
    console.log("WE HAVE A WINNER");
  }
}

takesIn3Nums(100, 210, 3);

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day".
// Handle capitilization and if the user does not enter a day of the week alert "Try again!"

// function dayOfTheWeek(day) {
//   day = day.toLowerCase();
//   if (day == "Saturday" || day == "Sunday") {
//     console.log("Week day");
//   } else {
//     console.log("Try again!");
//   }
// }
// dayOfTheWeek("saturday");
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
