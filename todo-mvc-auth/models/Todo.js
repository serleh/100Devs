const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
