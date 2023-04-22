const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  database: "node_sequelize",
  username: "root",
  password: "",
});

sequelize.sync({ force: false });

sequelize
  .authenticate()
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log(`DB Connection failed: `, e?.message));

module.exports = sequelize;
