// A function that gets an array and removes to it all values except those that are between 'a' and 'b'
// The test is: a ≤ arr[i] ≤ b

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (value < a || value > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
