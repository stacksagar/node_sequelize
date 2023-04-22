const { DataTypes: types } = require("sequelize");
const sequelize = require("../database/sequelize");
const Post = require("./Post");
const User = require("./User");

const Comment = sequelize.define("Comment", {
  body: {
    type: types.TEXT,
    allowNull: false,
  },
});

Post.hasMany(Comment);
User.hasMany(Comment);

Comment.belongsTo(User);
Comment.belongsTo(Post);

module.exports = Comment;
