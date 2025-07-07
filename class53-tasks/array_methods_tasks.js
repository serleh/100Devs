//PREP
// A function that changes dash-seperated words like "my-short-string" into camel-cased "myShortString"

// P - String
// R - String

function camelize(str) {
  //P
  // Turn the str to array
  // Capitalize every word except  the first word
  // Turn it  back to str

  // str = str
  //   .split("-")
  //   .map((word, index) => {
  //     if (index === 0) {
  //       return word.toLowerCase();
  //     } else {
  //       return word[0].toUpperCase() + word.slice(1);
  //     }
  //   })
  //   .join("");

  return str
    .split("-")
    .map((word, index) => {
      return index === 0
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.slice(1);
    })
    .join("");
}

// E
console.log(camelize("Background-color")); // backgroundColor
console.log(camelize("list-style-image")); // listStyleImage
console.log(camelize("-webkit-transition")); // WebkitTransition
