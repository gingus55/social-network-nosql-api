const getUsers = () => {
  res.send("getUsers");
};
const getUserById = () => {
  res.send("getUserById");
};
const createUser = () => {
  res.send("createUser");
};
const updateUserById = () => {
  res.send("updateUserById");
};
const deleteUserById = () => {
  res.send("deleteUserById");
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
