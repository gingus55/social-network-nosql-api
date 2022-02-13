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
const getThoughtById = async (req, res) => {
  try {
    const { id } = req.params;
    const thought = await Thought.findById(id);
    return res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get thought" });
  }
};
const createThought = async (req, res) => {
  try {
    const { thoughtText, username } = req.body;
    const thought = await Thought.create({ username, thoughtText });
    return res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to create thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create thought" });
  }
};
const updateThoughtById = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    await Thought.updateOne({ _id: id }, { $set: body });
    const thought = await Thought.findById(id);
    return res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to update thought by ID | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to update thought" });
  }
};
const deleteThoughtById = async (req, res) => {
  try {
    const { id } = req.params;
    const thought = await Thought.findByIdAndDelete(id);
    return res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete thought" });
  }
};

module.exports = {
  getThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
};
