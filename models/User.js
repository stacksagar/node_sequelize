const { DataTypes: types } = require("sequelize");
const sequelize = require("../database/sequelize");

const User = sequelize.define("User", {
  username: {
    type: types.STRING,
    allowNull: false,
  },
  password: {
    type: types.STRING,
    allowNull: false,
  },
});
 

module.exports = User;