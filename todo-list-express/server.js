const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb+srv://salehabdullahi:Hello@cluster0.a4fgfgj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
  .then((client) => {
    const db = client.db("todos");
    const todosCollection = db.collection("todo");
    console.log("Connected to Database");

    app.set("view engine", "ejs");
    app.use(express.urlencoded({ extended: true }));

    app.get("/", (req, res) => {
      todosCollection
        .find()
        .toArray()
        .then((data) => {
          res.render("index", { todos: data });
        });
    });

    app.post("/todo", (req, res) => {
      todosCollection.insertOne(req.body).then((results) => {
        res.redirect("/");
      });
    });
    app.listen(3000, () => {
      console.log("App listening on port 3000");
    });
  })
  .catch((error) => console.error(error));
