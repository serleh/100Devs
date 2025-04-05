// n *n 
// example 2**3
// 2 x 2 x 2

function pow(x,n){
    let result = x;

    for(let i = 1; i < n; i++){
        console.log(i)
        result *=x
    }

    return result
}



// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
//   alert(`Power ${n} is not supported, use a positive integer`);
// } else {
//   alert( pow(x, n) );
// }