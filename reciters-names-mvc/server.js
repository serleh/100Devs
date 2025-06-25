const express = require("express");
const app = express();
const connectDb = require("./config/database");
const recitersRoutes = require("./routes/reciters");
require("dotenv").config({ path: "./config/.env" });

connectDb();

// MIDDLEWARES
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(process.env.PORT, (req, res) => {
  console.log(`App Listening on port ${process.env.PORT}`);
});

//Routes middleware
app.use("/", recitersRoutes);
