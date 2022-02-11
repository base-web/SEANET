const mongoose = require("mongoose");
const tokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  otherData: {
    type: String,
  },
});

module.exports = mongoose.model("Token", tokenSchema);
