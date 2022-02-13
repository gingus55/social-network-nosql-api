const { Router } = require("express");
const {
  deleteFriendOfUser,
  addFriendForUser,
} = require("../../controllers/api/friends");

const router = Router({ mergeParams: true });

router.post("/", addFriendForUser);
router.delete("/:friendId", deleteFriendOfUser);

module.exports = router;
