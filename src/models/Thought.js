const { Schema } = require("mongoose");
const moment = require("moment");

const reaction = require("./Reaction");

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
  reactions: [reaction],
};

const schema = new Schema(thoughtSchema);

module.exports = schema;
