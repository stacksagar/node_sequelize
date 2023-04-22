const router = require("express").Router();
const Reply = require("../models/Reply");
const User = require("../models/User");

router.post("/create", async (req, res, next) => {
  const { body, CommentId, UserId } = req.body;
  try {
    const reply = await Reply.create({ body, UserId, CommentId });
    res.status(201).json({ reply });
  } catch (error) {
    next(error);
  }
});

router.get("/all", async (_req, res, next) => {
  try {
    const data = await Reply.findOne({
      where: { CommentId: 1 },
      attributes: ["id", "body", "updatedAt"],
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
    });

    res.status(201).json({ data });
  } catch (error) {
    next(error);
  }
});

module.exports = replyRoutes = router;
