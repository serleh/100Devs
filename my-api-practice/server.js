const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const familyMembers = {
  baba: {
    name: "Saleh Yakubu",
    age: 60,
    title: "Sarkin Arewan Dutse",
  },
  mama: {
    name: "Maryam Saleh",
    age: 65,
    title: "Matar Sarkin Arewa",
  },
  bako: {
    name: "Unknown",
    age: 0,
    title: "Unknown",
  },
};

app.get("/familymembers", (req, res) => {
  res.json(familyMembers);
});

app.get("/familymembers/:familyMemberName", (req, res) => {
  const familyMember = req.params.familyMemberName.toLocaleLowerCase();
  if (familyMembers[familyMember]) {
    res.json(familyMembers[familyMember]);
  } else {
    res.json(familyMembers["bako"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The port is running on ${PORT} go catch it`);
});
