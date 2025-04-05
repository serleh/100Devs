function countEvenOdd(arr) {
    let evenCount = 0;
    let oddCount = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    return { even: evenCount, odd: oddCount };
}

// Example usage
console.log(countEvenOdd([9, 3, 4,15, 6])); // Output: { even: 3, odd: 3 }
