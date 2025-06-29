const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const authController = require("../controllers/auth");
const { isLoggedIn } = require("../middleware/auth");

router.get("/", homeController.getIndex);
router.get("/register", authController.getRegisterPage);
router.get("/login", authController.getLogin);
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

module.exports = router;
