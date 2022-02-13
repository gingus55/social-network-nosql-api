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
    console.log(`[ERROR]: Failed to create reaction | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create reaction" });
  }
};
const deleteReactionOfThought = async (req, res) => {
  try {
    const { reactionId, id } = req.params;

    const thought = await Thought.findById(id);

    const newReactions = thought.reactions.filter(
      (currentReaction) => currentReaction.reactionId != reactionId
    );

    await Thought.updateOne({ _id: id }, { reactions: newReactions });

    const data = await Thought.findById(id);

    return res.json({ success: true, data: data });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete reaction | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete reaction" });
  }
};

module.exports = { addReactionForThought, deleteReactionOfThought };
