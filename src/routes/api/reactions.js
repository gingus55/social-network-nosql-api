const { Router } = require("express");
const {
  addReactionForThought,
  deleteReactionOfThought,
} = require("../../controllers/api/reactions");

const router = Router({ mergeParams: true });

router.post("/", addReactionForThought);
router.delete("/:reactionId", deleteReactionOfThought);

module.exports = router;
