const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { nanoid } = require("nanoid");
const userSchema = new Schema({
  _id: {
    type: String,
    default: () => nanoid(),
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
