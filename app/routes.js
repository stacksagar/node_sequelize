const commentRoutes = require("../routes/comment.routes");
const postRoutes = require("../routes/post.routes");
const replyRoutes = require("../routes/reply.routes");
const userRoutes = require("../routes/user.routes");

const router = require("express").Router();

router.get("/health", (_req, res) => {
  res.status(200).json({ message: "ok", success: true });
});

router.use("/user", userRoutes); 
router.use("/post", postRoutes); 
router.use("/comment", commentRoutes); 
router.use("/reply", replyRoutes); 

module.exports = router;
