const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo");

router.get("/", todoController.getTodos);
router.post("/createTodo", todoController.createTodo);
router.delete("/deleteTodo", todoController.deleteTodo);
router.put("/markCompleted", todoController.markComplete);
router.put("/markInCompleted", todoController.markInComplete);

module.exports = router;
