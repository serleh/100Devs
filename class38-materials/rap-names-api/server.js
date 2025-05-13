const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "21 savage": {
    age: 29,
    birthName: "Sheyaa Bin Abraham",
    birthLocation: "London, England",
  },
  "chance the rapper": {
    age: 28,
    birthName: "Chanceller Bernert",
    birthLocation: "Chicago, Illinos",
  },
  dylan: {
    age: 29,
    birthName: "Dylan",
    birthLocation: "London, England",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapperName", (req, res) => {
  const rappersName = req.params.rapperName.toLowerCase();
  if (rappers[rappersName]) {
    res.json(rappers[rappersName]);
  } else {
    res.json(rappers["Dylan"]);
  }
  //   res.json(rappers);
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT} go catch it!`);
});
