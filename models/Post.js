const { DataTypes: types } = require("sequelize");
const sequelize = require("../database/sequelize");
const User = require("./User");

const Post = sequelize.define("Post", {
  body: {
    type: types.TEXT,
    allowNull: false,
  },
});

User.hasMany(Post)
Post.belongsTo(User)

module.exports = Post;
