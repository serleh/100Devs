const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

let db,
  dbConnectStr = process.env.DB_STRING,
  dbName = "todos";
MongoClient.connect(
  "mongodb+srv://salehabdullahi:Hello@cluster0.a4fgfgj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
  .then((client) => {
    db = client.db(dbName);
    const todosCollection = db.collection("todo");
    console.log("Connected to Database");
    // Middlewares
    app.set("view engine", "ejs");
    app.use(express.static("public"));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // Home route
    app.get("/", (req, res) => {
      todosCollection
        .find()
        .toArray()
        .then((data) => {
          todosCollection
            .countDocuments({ completed: false })
            .then((itemsLeft) => {
              res.render("index.ejs", {
                todos: data,
                left: itemsLeft,
              });
            });
        });
    });

    // Add todo route
    app.post("/todo", (req, res) => {
      todosCollection
        .insertOne({ thing: req.body.todo, completed: false })
        .then((results) => {
          res.redirect("/");
        });
    });

    // MarkCompleted
    app.put("/markCompleted", (req, res) => {
      todosCollection
        .updateOne(
          { thing: req.body.todo },
          { $set: { completed: true } },
          { sort: { _id: -1 }, upsert: false }
        )
        .then((result) => {
          console.log("Mark as completed");
          res.json(" Mark as completed ");
        });
    });

    // MarkCompleted
    app.put("/markUnCompleted", (req, res) => {
      todosCollection
        .updateOne(
          { thing: req.body.todo },
          { $set: { completed: false } },
          { sort: { _id: -1 }, upsert: false }
        )
        .then((result) => {
          console.log("Mark as Uncompleted");
          res.json(" Mark as Uncompleted ");
        });
    });

    // Delete route
    app.delete("/deleteTodo", (req, res) => {
      todosCollection.deleteOne({ thing: req.body.todo }).then((result) => {
        console.log("Deleted");
        res.json("todo deleted");
      });
    });

    app.listen(3000, () => {
      console.log("App listening on port 3000");
    });
  })
  .catch((error) => console.error(error));
