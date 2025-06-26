const express = require("express");
const app = express();
const homeRoutes = require("./routes/home");
const todoRoutes = require("./routes/todos");
const connectDB = require("./config/database");

require("dotenv").config({ path: "./config/.env" });

connectDB();

//Middlewares
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes middleware
app.use("/", homeRoutes);
app.use("/todos", todoRoutes);

app.listen(3000, () => {
  console.log("Server running");
});
