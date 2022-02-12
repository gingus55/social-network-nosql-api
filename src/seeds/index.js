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

    await Thought.deleteMany({});
    await Thought.insertMany(thoughts);

    console.log("[INFO]: Successfully seeded thoughts");

    const usersFromDb = await User.find({});

    usersFromDb.forEach((user) => {
      const userId = user._id.toString();

      console.log(userId);

      const randomFriend = users[Math.floor(Math.random() * users.length)];

      console.log(randomFriend);

      randomFriend.friends.push(userId);
    });

    const newUsers = await User.find({});
    console.log(newUsers);

    console.log("[INFO]: Successfully seeded users with friends");

    // const thoughtsFromDb = await Thought.find({});

    // thoughtsFromDb.forEach((thought) => {
    //   const thoughtId = thought._id.toString();

    //   const randomUser = users[Math.floor(Math.random() * users.length)];

    //   randomUser.thoughts.push(thoughtId);
    // });

    // console.log("[INFO]: Successfully seeded users with thoughts");

    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }
};

init();
