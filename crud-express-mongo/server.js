const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const connectionString =
  "mongodb+srv://salehabdullahi:Hello@cluster0.a4fgfgj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(connectionString)
  .then((client) => {
    console.log("Connected to DB");
    const db = client.db("star-wars-quotes");
    const quotesCollection = db.collection("quotes");

    app.set("view engine", "ejs");
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("public"));
    app.use(express.json());

    app.get("/", (req, res) => {
      quotesCollection
        .find()
        .toArray()
        .then((results) => {
          res.render("index.ejs", { quotes: results });
        });
    });
    app.post("/quotes", (req, res) => {
      quotesCollection.insertOne(req.body).then((result) => {
        res.redirect("/");
      });
    });

    app.put("/quotes", (req, res) => {
      quotesCollection
        .findOneAndUpdate(
          { name: "Yoda" },
          {
            $set: {
              name: req.body.name,
              quote: req.body.quote,
            },
          },
          {
            upsert: true,
          }
        )
        .then((result) => {
          res.json("success");
        });
    });

    app.delete("/quotes", (req, res) => {
      quotesCollection.deleteOne({ name: req.body.name }).then((result) => {
        if (result.deletedCount === 0) {
          return res.json("No Quote to delete");
        }
        res.json("Delete Dartth quote");
      });
    });

    app.listen(3000, () => {
      console.log("Server running ");
    });
  })
  .catch((error) => console.error(error));
