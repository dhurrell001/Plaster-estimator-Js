const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "PlasterDatabase.sqlite", // The file where your SQLite DB will be stored
});

module.exports = sequelize;
