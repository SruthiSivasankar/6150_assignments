const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
    unique: false,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minLength: 8,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
