const Comment = require("../models/Comment");
const Post = require("../models/Post");
const Reply = require("../models/Reply");
const User = require("../models/User");

const router = require("express").Router();

router.post("/create", async (req, res, next) => {
  const { body, UserId } = req.body;
  try {
    const post = await Post.create({ body, UserId });
    res.status(201).json({ post });
  } catch (error) {
    next(error);
  }
});

router.get("/all", async (_req, res, next) => {
  try {
    const data = await Post.findAll({
      attributes: ["id", "body", "updatedAt"],
      include: [
        {
          model: User,
          attributes: ["username", "id"],
        },
        {
          model: Comment,
          attributes: ["id", "body"],
          include: [
            {
              model: Reply,
              attributes: ["id", "body"],
              include: {
                model: User,
                attributes: ["id", "username"],
              },
            },
            {
              model: User,
              attributes: ['id', 'username']
            }
          ],
        },
      ],
    });
    res.status(201).json({ data });
  } catch (error) {
    next(error);
  }
});

module.exports = postRoutes = router;
