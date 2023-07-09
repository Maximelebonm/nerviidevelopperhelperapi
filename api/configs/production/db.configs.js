const Sequelize = require("sequelize");
let db;

db = new Sequelize("eg1j1ajilkczimma", "bejeqxmew6pyizdi", "phzrauccqh9sip7x", {
  host: "eporqep6b4b8ql12.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
  dialect: "mysql",
});

module.exports = db;
