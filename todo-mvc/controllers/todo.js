const Todo = require("../models/Todo");
module.exports = {
  getTodos: async (req, res) => {
    try {
      const todoItems = await Todo.find();
      const itemsLeft = await Todo.countDocuments({ completed: false });
      res.render("index.ejs", { todos: todoItems, left: itemsLeft });
    } catch (err) {
      console.error(err);
    }
  },
  createTodo: async (req, res) => {
    console.log(req.body.todoItem);
    try {
      await Todo.create({ todo: req.body.todoItem, completed: false });
      console.log("Todo created");
      res.redirect("/todos");
    } catch (err) {
      console.error(err);
    }
  },
  deleteTodo: async (req, res) => {
    console.log(req.body.todoIdFromJSFile);
    try {
      await Todo.findOneAndDelete({ _id: req.body.todoIdFromJSFile });
      console.log("Todo Deleted");
      res.json("deleted");
    } catch (err) {
      console.error(err);
    }
  },
  markComplete: async (req, res) => {
    console.log(req.body.todoIdFromJSFile);
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        { completed: true }
      );
      console.log("Mark Completed ");
      res.json("Marked Completed");
    } catch (err) {
      console.error(err);
    }
  },
  markInComplete: async (req, res) => {
    console.log(req.body.todoIdFromJSFile);
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        { completed: false }
      );
      console.log("Mark InCompleted ");
      res.json("Marked InCompleted");
    } catch (err) {
      console.error(err);
    }
  },
};
