const Todo = require("../models/Todo");

module.exports = {
  getTodo: async (req, res) => {
    const userId = req.session.user_id;
    try {
      const todoItems = await Todo.find({ user: userId });
      const itemsLeft = await Todo.countDocuments({
        user: userId,
        completed: false,
      });
      res.render("todos.ejs", { todos: todoItems, left: itemsLeft });
    } catch (err) {
      console.error(err);
    }
  },
  createTodo: async (req, res) => {
    const userId = req.session.user_id;
    try {
      await Todo.create({
        todo: req.body.todoItem,
        completed: false,
        user: userId,
      });
      console.log("todo has been added");
      res.redirect("/todos");
    } catch (err) {
      console.error(err);
    }
  },
};
