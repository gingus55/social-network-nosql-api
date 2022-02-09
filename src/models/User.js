const { Schema, model } = require("mongoose");

const friend = require("./Friend");
const thought = require("./Thought");

const userSchema = {
  username: {
    type: String,
    unique: true,
    required: true,
    trimmed: true,
  },
  email: {
    type: String,
    required: true,
    maxLength: 50,
  },
  friends: [friend],
  thought: [thought],
};

const schema = new Schema(userSchema);

const User = model("user", schema);

module.exports = User;
