const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reciterSchema = new Schema({
  reciterName: {
    type: String,
    required: true,
  },
  reciterLocation: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: { type: String, required: true },
});

module.exports = mongoose.model("reciters", reciterSchema);
