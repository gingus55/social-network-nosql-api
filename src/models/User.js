const { Schema, model } = require("mongoose");

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
  friends: [User],
  thoughts: [Thought],
};

const schema = new Schema(userSchema);

const User = model("user", schema);

module.exports = User;
