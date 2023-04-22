const { DataTypes: types } = require("sequelize");
const sequelize = require("../database/sequelize");
const Comment = require("./Comment");
const User = require("./User");

const Reply = sequelize.define("Reply", {
  body: {
    type: types.TEXT,
    allowNull: false,
  },
});

Comment.hasMany(Reply);
User.hasMany(Reply);

Reply.belongsTo(User);
Reply.belongsTo(Comment);

module.exports = Reply;
