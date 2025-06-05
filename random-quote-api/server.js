const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const quotes = [
  {
    quote:
      "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.",
    author: "Bill Gates",
    category: "Productivity / Problem Solving",
  },
  {
    quote: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
    category: "Code / Action",
  },
  {
    quote: "Premature optimization is the root of all evil.",
    author: "Donald Knuth",
    category: "Software Engineering / Optimization",
  },
  {
    quote:
      "The most dangerous phrase in the language is, ‘We’ve always done it this way.’",
    author: "Grace Hopper",
    category: "Innovation / Change",
  },
  {
    quote: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
    category: "Software Design / Simplicity",
  },
  {
    quote:
      "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows your whole leg off.",
    author: "Bjarne Stroustrup",
    category: "Programming Languages / Humor",
  },
  {
    quote: "Simple things should be simple, complex things should be possible.",
    author: "Alan Kay",
    category: "Software Design / Usability",
  },
  {
    quote: "Debugging is twice as hard as writing the code in the first place.",
    author: "Brian Kernighan",
    category: "Debugging / Software Development",
  },
  {
    quote: "Never trust a computer you can’t throw out a window.",
    author: "Steve Wozniak",
    category: "Hardware / Humor",
  },
  {
    quote: "Your most unhappy customers are your greatest source of learning.",
    author: "Bill Gates",
    category: "Customer Feedback / Software Improvement",
  },
  {
    quote:
      "One of my most productive days was throwing away 1,000 lines of code.",
    author: "Ken Thompson",
    category: "Productivity / Code Quality",
  },
  {
    quote:
      "UNIX is basically a simple operating system, but you have to be a genius to understand the simplicity.",
    author: "Dennis Ritchie",
    category: "Operating Systems / Simplicity",
  },
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
    category: "Code Readability / Best Practices",
  },
  {
    quote:
      "The function of good software is to make the complex appear simple.",
    author: "Grady Booch",
    category: "Software Design / Usability",
  },
  {
    quote: "Controlling complexity is the essence of computer programming.",
    author: "Brian Kernighan",
    category: "Software Engineering / Complexity",
  },
  {
    quote: "It’s not a bug – it’s an undocumented feature.",
    author: "Anonymous",
    category: "Debugging / Humor",
  },
  {
    quote: "Good code is its own best documentation.",
    author: "Steve McConnell",
    category: "Code Quality / Documentation",
  },
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    category: "Code Readability / Best Practices",
  },
  {
    quote:
      "In theory, theory and practice are the same. In practice, they’re not.",
    author: "Yogi Berra",
    category: "Theory vs Practice / Programming Wisdom",
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    category: "Problem Solving / Programming Strategy",
  },
];

// Home page route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Return all quotes
app.get("/quotes", (req, res) => {
  res.json(quotes);
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT} `);
});
