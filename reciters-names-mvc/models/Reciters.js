const mongoose = require("mongoose");

const ReciterSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("Reciters", ReciterSchema);
