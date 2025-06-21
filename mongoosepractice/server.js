const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/street-fighters";
const Character = require("./models/Character");

mongoose.connect(url);
const db = mongoose.connection;

db.once("open", (_) => {
  console.log("Database connected:", url);
});

db.on("error", (err) => {
  console.error("connection error", err);
});

// Create Character
// const ryu = new Character({
//   name: "Ryu",
//   ultimate: "Shinku Hadoken",
// });

// // Save
// ryu.save();

// function saveCharacter(character) {
//   const c = new Character(character);
//   return c.save();
// }

// saveCharacter({
//   name: "Saleh ",
//   ultimate: "Crawling",
// })
//   .then((doc) => console.log(doc))
//   .catch((error) => console.error(error));

async function runCode() {
  const ryu = new Character({
    name: "Moh",
    ultimate: "Shinku Hadoken",
  });
  const saleh = new Character({
    name: "Saleh",
    ultimate: "Crawl",
  });
  const doc = await ryu.save();
  await saleh.save();
  console.log(doc);
}

runCode().catch((error) => console.error(error));
