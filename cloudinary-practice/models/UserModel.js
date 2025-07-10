const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  address: String,
  image: String, // cloudinary URL
});

module.exports = mongoose.model("User", userSchema);
