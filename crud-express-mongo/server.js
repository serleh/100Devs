const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const connectionString =
  "mongodb+srv://salehabdullahi:Hello@cluster0.a4fgfgj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(connectionString)
  .then((client) => {
    const db = client.db("star-wars-quotes");
    const quotesCollection = db.collection("quotes");
    console.log("Connected to DB 🎉");

    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("public"));
    app.use(express.json());

    app.get("/", (req, res) => {
      //res.sendFile(__dirname + "/index.html");

      db.collection("quotes")
        .find()
        .toArray()
        .then((results) => {
          res.render("index.ejs", { quotes: results });
        })
        .catch((error) => console.error(error));
    });

    app.post("/quotes", (req, res) => {
      quotesCollection
        .insertOne(req.body)
        .then((result) => {
          res.redirect("/");
        })
        .catch((error) => console.error(error));
    });
    app.put("/quotes", (req, res) => {
      quotesCollection
        .findOneAndUpdate(
          { name: "Saleh" },
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
          res.json("Success");
        })
        .catch((error) => console.error(error));
    });

    app.listen(3000, () => {
      console.log("listening on port 3000");
    });
  })
  .catch((error) => console.error(error));
