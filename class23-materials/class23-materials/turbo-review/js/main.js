// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

let str = "What is ur name ? hey";
if (str.endsWith("?")) {
  alert("This is a str");
}

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let str1 = "I am looking for jr. dev positions";
console.log(str1.replaceAll("jr. dev", "software engineering"));
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
  let random = Math.random();
  if (random < 0.33) {
    return "rock";
  } else if (random < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors
// against a bot using the above function
function checkWin(playerChoice) {
  let botChoice = rockPaperScissors();

  if (
    (playerChoice === "rock" && botChoice === "scissors") ||
    (playerChoice === "scissors" && botChoice === "paper") ||
    (playerChoice === "paper" && botChoice === "rock")
  ) {
    console.log("WINNNNNNNNNNNNNNNNNER");
  } else if (playerChoice === botChoice) {
    console.log("TIEEEEEEEEEEEEEEEEEEEED");
  } else {
    console.log("LOOSER");
  }
}

checkWin("paper");

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
