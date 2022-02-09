const mongoose = require("mongoose");

const { User, Thought } = require("../models");
const thoughts = require("./data/thoughts");
const users = require("./data/users");

const init = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/socialNetworkDb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[INFO]: Database connection successful");

    await User.deleteMany({});
    await User.insertMany(users);

    console.log("[INFO]: Successfully seeded users");

    const usersFromDb = await User.find({});

    usersFromDb.forEach((user) => {
      const userId = user._id.toString();

      const randomThought =
        thoughts[Math.floor(Math.random() * thoughts.length)];

      randomThought.users.push(userId);
    });

    await Thought.deleteMany({});
    await Thought.insertMany(thoughts);

    console.log("[INFO]: Successfully seeded thoughts");

    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }
};

init();
