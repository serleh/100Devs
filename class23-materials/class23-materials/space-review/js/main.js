//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let sumOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8].reduce((sum, num) => sum + num, 0);
console.log(sumOfNumbers);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squared(arr) {
  return arr.map((el) => el ** 2);
}

console.log(squared([1, 2, 3, 44, 4]));

//Create a function that takes string
//Print the reverse of that string to the console
let reverseStr = (str) => {
  console.log(str.split("").reverse().join());
};

//Create a function that takes in a string
//Alert if the string is a palindrome or not
const palindromeCheck = (str) =>
  console.log(str === str.split(" ").reverse().join());

palindromeCheck("racecar");
