const { Thought } = require("../../models");

const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find({});
    return res.json({ success: true, data: thoughts });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thoughts | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get thoughts" });
  }
};
const getThoughtById = (req, res) => {
  res.send("getThoughtById");
};
const createThought = (req, res) => {
  res.send("createThought");
};
const updateThoughtById = (req, res) => {
  res.send("updateThoughtById");
};
const deleteThoughtById = (req, res) => {
  res.send("deleteThoughtById");
};

module.exports = {
  getThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
};
