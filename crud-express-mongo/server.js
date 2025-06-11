const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb+srv://salehabdullahi:Hello@cluster0.a4fgfgj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
  .then((client) => {
    console.log("Connected to DB");
    const db = client.db("star-wars-quotes");
    const quotesCollection = db.collection("quotes");
    app.set("view engine", "ejs");
    app.use(express.urlencoded({ extended: true }));
    app.get("/", (req, res) => {
      quotesCollection
        .find()
        .toArray()
        .then((results) => res.render("index.ejs", { quotes: results }));
    });

    app.post("/quotes", (req, res) => {
      quotesCollection.insertOne(req.body).then((result) => {
        res.redirect("/");
      });
    });

    app.listen(3000, () => {
      console.log("listening on 3000");
    });
  })
  .catch((error) => console.error(error));
