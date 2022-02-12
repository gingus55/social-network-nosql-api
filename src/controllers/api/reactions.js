const { Thought } = require("../../models");

const addReactionForThought = async (req, res) => {
  try {
    const { id } = req.params;
    const { reactionBody, username } = req.body;
    const thought = await Thought.findById(id);

    thought.reactions.push({ reactionBody, username });

    await Thought.replaceOne({ _id: id }, thought);

    const updatedThought = await Thought.findById(id);

    return res.json({ success: true, data: updatedThought });
  } catch (error) {
    console.log(`[ERROR]: Failed to create thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create thought" });
  }
};
const deleteReactionOfThought = (req, res) => {
  res.send("deleteReactionOfThought");
};

module.exports = { addReactionForThought, deleteReactionOfThought };
