const Sequelize = require("sequelize");
let db;

db = new Sequelize("Nerviidevelopperhelper", "root", "root", {
  host: "Localhost",
  dialect: "mysql",
});

module.exports = db;
