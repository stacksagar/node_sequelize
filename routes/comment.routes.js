const Comment = require("../models/Comment");
const Post = require("../models/Post");
const Reply = require("../models/Reply");
const User = require("../models/User");

const router = require("express").Router();

router.post("/create", async (req, res, next) => {
  const { body, UserId, PostId } = req.body;
  try {
    const comment = await Comment.create({ body, UserId, PostId });
    res.status(201).json({ comment });
  } catch (error) {
    next(error);
  }
});

router.get("/all", async (_req, res, next) => {
  try {
    const data = await Comment.findAll({
      attributes:  ['id', 'body'],
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
        {
          model: Reply,
          attributes: ["id", "body"],
          include: {
            model: User,
            attributes: ["id", "username"],
          },
        },
        {
          model: Post,
          attributes: ["id", "body"],
          include: {
            model: User,
            attributes: ["id", "username"],
          },
        },
      ],
    });
    res.status(201).json({ data });
  } catch (error) {
    next(error);
  }
});

module.exports = commentRoutes = router;
