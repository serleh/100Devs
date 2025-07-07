const express = require("express");
const authRoutes = require("./routes/auth-routes");
const passportSetUp = require("./config/passport-setup");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

// set view engine
app.set("view engine", "ejs");

// Connect to mongodb
mongoose
  .connect(process.env.DB_STRING)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => console.error(err));

app.use("/auth", authRoutes);

// create home
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
