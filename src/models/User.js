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
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "thought",
    },
  ],
};

const schema = new Schema(userSchema);

schema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", schema);

module.exports = User;
