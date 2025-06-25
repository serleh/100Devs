const express = require("express");
const router = express.Router();
const recitersController = require("../controllers/reciters");

router.get("/", recitersController.getReciters);
router.post("/reciters", recitersController.createReciters);
router.put("/addLike", recitersController.addLike);
router.delete("/deleteLike", recitersController.deleteReciter);

module.exports = router;
