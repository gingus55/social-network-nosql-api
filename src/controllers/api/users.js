const { User } = require("../../models");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.json({ success: true, data: users });
  } catch (error) {
    console.log(`[ERROR]: Failed to get users | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get users" });
  }
};
const getUserById = (req, res) => {
  res.send("getUserById");
};
const createUser = (req, res) => {
  res.send("createUser");
};
const updateUserById = (req, res) => {
  res.send("updateUserById");
};
const deleteUserById = (req, res) => {
  res.send("deleteUserById");
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
