const express = require("express");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");
const passportSetUp = require("./config/passport-setup");
const mongoose = require("mongoose");
const cookieSession = require("express-session");
const passport = require("passport");
const app = express();

require("dotenv").config();

// set view engine
app.set("view engine", "ejs");

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    secret: process.env.secretKey,
  })
);

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Connect to mongodb
mongoose
  .connect(process.env.DB_STRING)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => console.error(err));

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

// create home
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
