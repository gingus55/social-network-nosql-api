const { User } = require("../../models");

const addFriendForUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, username } = req.body;
    const friend = await User.create({ email, username });
    const friendId = friend._id;

    const user = await User.findById(id);
    user.friends.push(friendId);

    await User.replaceOne({ _id: id }, user);

    const updatedUser = await User.findById(id);

    return res.json({ success: true, data: updatedUser });
  } catch (error) {
    console.log(`[ERROR]: Failed to create friend for user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create friend for user" });
  }
};
const deleteFriendOfUser = (req, res) => {
  res.send("deleteFriendOfUser");
};

module.exports = { addFriendForUser, deleteFriendOfUser };
