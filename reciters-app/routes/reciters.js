const express = require("express");
const router = express.Router();
const recitersController = require("../controllers/reciters");
const { isLoggedIn } = require("../middleware/auth");

router.get("/", isLoggedIn, recitersController.getReciters);
router.post("/addReciter", recitersController.addReciters);
router.put("/addLikes", recitersController.addLikes);
router.delete("/deleteReciter", recitersController.deleteReciter);

module.exports = router;
