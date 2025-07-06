const router = require("express").Router();
const passport = require("passport");

// auth login
router.get("/login", (req, res) => {
  res.render("login");
});

// auth logout
router.get("/logout", (req, res) => {
  // handle with passport
  res.send("logging out");
});

// auth with goggle
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// callback route for redirect
router.get("/google/redirect", (req, res) => {
  res.send("You reached a callback URI");
});

module.exports = router;
