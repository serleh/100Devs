// A function that gets an array arr,looks for elements with values higher or equal to 'a' and lower or equal to 'b'

// P --> array, number
// R -->  array

function filterRange(arr, a, b) {
  return arr.filter((e) => e >= a && e <= b);
}

console.log(filterRange([5, 3, 8, 1], 1, 4)); // --> 3,1
