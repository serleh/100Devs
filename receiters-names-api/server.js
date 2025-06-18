const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

let db,
  dbConnectStr = process.env.DB_STRING,
  dbName = "receitersDb";

MongoClient.connect(dbConnectStr)
  .then((client) => {
    db = client.db(dbName);
    const receitersCollection = db.collection("receiters");
    console.log("Database connected");
    // Middlewares
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.set("view engine", "ejs");
    app.use(express.static("public"));

    // Home page
    app.get("/", (req, res) => {
      receitersCollection
        .find()
        .sort({ likes: -1 })
        .toArray()
        .then((data) => {
          res.render("index", { reciters: data });
        })
        .catch((error) => console.error(error));
    });

    // adding receiters to db
    app.post("/receiters", (req, res) => {
      receitersCollection
        .insertOne({
          receiterName: req.body.receiterName,
          receiterLocation: req.body.receiterLocation,
          likes: 0,
        })
        .then((result) => {
          console.log("Receiter added");
          res.redirect("/");
        })
        .catch((error) => console.error(error));
    });

    // Deleting receiter
    app.delete("/receiters", (req, res) => {
      receitersCollection
        .deleteOne({ receiterName: req.body.reciterName })
        .then((result) => {
          console.log("receiter deleted");
          res.json("Deleted");
        });
    });

    // Update like
    app.put("/receiters", (req, res) => {
      receitersCollection
        .updateOne(
          {
            receiterName: req.body.reciterName,
            receiterLocation: req.body.reciterLocation,
          },
          { $inc: { likes: 1 } },
          { upsert: false }
        )
        .then((result) => {
          console.log("Added one like");
          res.json("Like Added");
        });
    });

    app.listen(3000, () => {});
  })
  .catch((error) => console.error(error));
