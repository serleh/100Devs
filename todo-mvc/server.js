const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = "todo";

MongoClient.connect(dbConnectionStr)
  .then((client) => {
    console.log(`Connected to Database: ${dbName}`);
    db = client.db(dbName);
    const todosCollection = db.collection("todos");
    // MiddleWares
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.static("public"));
    app.set("view engine", "ejs");

    // Home Route
    app.get("/", async (req, res) => {
      todoItems = await todosCollection.find().toArray();
      itemsLeft = await todosCollection.countDocuments({ completed: false });
      //   todosCollection
      //     .find()
      //     .toArray()
      //     .then((data) => {
      //       todosCollection
      //         .countDocuments({ completed: false })
      //         .then((itemsLeft) => {
      //           res.render("index.ejs", { items: data, left: itemsLeft });
      //         });
      //     });
      res.render("index.ejs", { items: todoItems, left: itemsLeft });
    });

    // Add Todo
    app.post("/todo", (req, res) => {
      console.log(req.body.todoItem);
      todosCollection
        .insertOne({ thing: req.body.todoItem, completed: false })
        .then((result) => {
          console.log("Todo Added");
          res.redirect("/");
        });
    });

    // Mark complte
    app.put("/markComplete", (req, res) => {
      todosCollection
        .updateOne(
          { thing: req.body.itemFromJs },
          { $set: { completed: true } },
          { sort: { _id: -1 }, upsert: false }
        )
        .then((result) => {
          console.log("Mark as complete");
          res.json("Marked complete");
        });
    });

    // MarkIncomplete
    app.put("/markUnComplete", (req, res) => {
      todosCollection
        .updateOne(
          { thing: req.body.itemFromJs },
          { $set: { completed: false } },
          { sort: { _id: -1 }, upsert: false }
        )
        .then((result) => {
          console.log("Mark as Uncomplete");
          res.json("Marked Uncomplete");
        });
    });

    // Delete Todo
    app.delete("/deleteTodo", (req, res) => {
      console.log(req.body.itemFromJs);
      todosCollection
        .deleteOne({ thing: req.body.itemFromJs })
        .then((result) => {
          console.log("Deleted");
          res.json("Todo Deleted");
        });
    });

    app.listen(3000, () => {
      console.log(`App listening on port 3000`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
