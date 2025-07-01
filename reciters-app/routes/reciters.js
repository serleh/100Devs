const express = require("express");
const router = express.Router();
const recitersController = require("../controllers/reciters");
const { isLoggedIn } = require("../middleware/auth");

router.get("/", isLoggedIn, recitersController.getReciters);

module.exports = router;
