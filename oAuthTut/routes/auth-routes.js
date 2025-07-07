const router = require("express").Router();
const passport = require("passport");

// auth login
router.get("/login", (req, res) => {
  res.render("login");
});

// auth logout
router.get("/logout", (req, res) => {
  // handle with passport
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

// auth with goggle
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// callback route for redirect
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  //res.send(req.user);

  res.redirect("/profile");
});

module.exports = router;
