const express = require("express");
const passport = require("passport");
const router = express.Router();

//@desc Auth with Google
//@route GET /auth/goggle

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

//@desc Google auth callabck
//@route GET / auth/google/callback

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

//@desc Logout User
//@route GET / auth/logout
router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
