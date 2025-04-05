// Create a Counter
// Add a button and a <span> displaying a number (starting from 0).
// Clicking the button increases the number by 1.


document.querySelector('.btn').addEventListener('click',increment)

let num = 0

function increment(){
    num = num + 1
    document.querySelector('.counter').innerHTML = num
    console.log('Hello')
}