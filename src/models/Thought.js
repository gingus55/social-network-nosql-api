const { Schema, model } = require("mongoose");
const moment = require("moment");

const schemaReaction = require("./Reaction");

const thoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: moment(),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [schemaReaction],
};

const schema = new Schema(thoughtSchema);

schema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", schema);

module.exports = Thought;
