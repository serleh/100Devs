const express = require("express");
const app = express();

require("dotenv").config({ path: "./config/database" });
require("dotenv").config({ path: "./config/.env" });
const connectDB = require("./config/database");
const session = require("./config/session");

const homeRoute = require("./routes/main");
const recitersRoute = require("./routes/reciters");

const PORT = process.env.PORT;

connectDB();

//middlewares
app.set("view engine", "ejs");
app.use(session);
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoute);
app.use("/reciters", recitersRoute);

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
