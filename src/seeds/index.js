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

    await Thought.deleteMany({});
    await Thought.insertMany(thoughts);

    console.log("[INFO]: Successfully seeded thoughts");

    const thoughtsFromDb = await Thought.find({});

    thoughtsFromDb.forEach((thought) => {
      const randomId = Math.floor(Math.random() * users.length);

      const randomUser = users[randomId];
      const thoughtId = thought._id.toString();

      randomUser.thoughts.push(thoughtId);
      users[randomId] = randomUser;
    });

    console.log("[INFO]: Successfully seeded users with thoughts");

    await User.deleteMany({});
    const newUsers = await User.insertMany(users);

    const friendPromise = newUsers.map(async (user) => {
      const userName = user.username;
      const allUsers = newUsers.filter(
        (currentUser) => currentUser.username != userName
      );

      const randomFriend =
        allUsers[Math.floor(Math.random() * allUsers.length)];

      user.friends.push(randomFriend._id);

      await User.findByIdAndUpdate(user._id, { ...user });
    });

    await Promise.all(friendPromise);

    console.log("[INFO]: Successfully seeded users with friends");

    console.log("[INFO]: Successfully seeded users");

    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }
};

init();
