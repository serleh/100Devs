//Create an array of movie titles. Loop through the array add each element to the h2.

let movies = ["One piece", "Attach on Titans", "Solo levelling"];

for (let i = 0; i <= movies.length; i++) {
  document.querySelector("h2").innerText += movies[i];
}
//Create an array of numbers. Loop through the array and add  three to each number and replace the old number.

let nums = [1, 10, 3, 4];
nums.forEach((item, idx) => {
  nums[i] = item + 3;
});

//Find the average of all the numbers from question two

let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}

console.log(sum / nums.length);
