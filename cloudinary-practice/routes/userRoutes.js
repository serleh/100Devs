const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const userController = require("../controllers/userController");

router.get("/", userController.getUsers);
router.post("/add", upload.single("image"), userController.createUser);

module.exports = router;
