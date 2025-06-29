const express = require("express");
const app = express();
const connectDB = require("./config/database");
const homeRoute = require("./routers/main");
const todosRoute = require("./routers/todos");
const session = require("./config/session");
require("dotenv").config({ path: "./config/.env" });

connectDB();

app.set("view engine", "ejs");
app.use(session);
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoute);
app.use("/todos", todosRoute);

app.listen(3000, () => {
  console.log("App running on port 3000");
});
