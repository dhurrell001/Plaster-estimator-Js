const { Sequelize } = require("sequelize");
//Create connection to the database
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "PlasterDatabase.sqlite", // The file SQLite DB will be stored
});

module.exports = sequelize;
