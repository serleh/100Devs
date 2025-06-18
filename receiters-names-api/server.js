const e = require("express");
const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
let db,
  dbConnectStr = process.env.DB_STRING,
  dbName = "receitersDb";

MongoClient.connect(dbConnectStr)
  .then((client) => {
    console.log("connected to database");
    db = client.db(dbName);
    const recitersCollection = db.collection("receiters");
    // Middlewares
    app.set("view engine", "ejs");
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("public"));
    app.use(express.json());

    //Home Route
    app.get("/", (req, res) => {
      recitersCollection
        .find()
        .sort({ likes: -1 })
        .toArray()
        .then((data) => {
          res.render("index.ejs", { reciters: data });
        });
    });

    // Add Reciter
    app.post("/reciters", (req, res) => {
      recitersCollection
        .insertOne({
          reciterName: req.body.reciterName,
          reciterLocation: req.body.reciterLocation,
          likes: 0,
        })
        .then((result) => {
          console.log("Reciter Added");
          res.redirect("/");
        });
    });
    // Add like
    app.put("/reciters", (req, res) => {
      const { reciterName, reciterLocation } = req.body;
      recitersCollection
        .updateOne(
          { reciterName, reciterLocation },
          { $inc: { likes: 1 } },
          { sort: { _id: -1 }, upsert: false }
        )
        .then((result) => {
          console.log("Added one like");
          res.json("Like added");
        });
    });

    // Delete reciter
    app.delete("/reciters", (req, res) => {
      recitersCollection
        .deleteOne({ reciterName: req.body.reciterName })
        .then((result) => {
          console.log("Deleted");
          res.json("Reciter deleted");
        });
    });

    app.listen(3000, () => console.log("App listening on port 3000"));
  })
  .catch((error) => console.log(error));
