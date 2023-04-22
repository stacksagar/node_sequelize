const Comment = require("../models/Comment");
const Post = require("../models/Post");
const Reply = require("../models/Reply");
const User = require("../models/User");

const router = require("express").Router();

router.post("/create", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const exist = await User.findOne({ where: { username } });
    if (exist) return next("Email already used!");

    const user = await User.create({ username, password });
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
});

router.get("/all", async (_req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["username", "id"],
      include: {
        model: Post,
        attributes: ["id", "body"],

        include: [
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
                attributes: ["id", "username"],
              },
            ],
          },
          {
            model: User,
            attributes: ["id", "username"],
          },
        ],
      },
    });
    res.status(201).json({ users });
  } catch (error) {
    next(error);
  }
});

module.exports = userRoutes = router;
