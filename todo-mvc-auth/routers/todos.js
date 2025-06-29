const express = require("express");
const router = express.Router();
todosController = require("../controllers/todos");
const { isLoggedIn } = require("../middleware/auth");

router.get("/", isLoggedIn, todosController.getTodo);
router.post("/createTodo", todosController.createTodo);

module.exports = router;
