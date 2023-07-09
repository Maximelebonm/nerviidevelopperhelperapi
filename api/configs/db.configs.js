const Sequelize = require("sequelize");

let db;
if (process.env.NODE_ENV === "production") {
  db = new Sequelize(
    "eg1j1ajilkczimma",
    "bejeqxmew6pyizdi",
    "phzrauccqh9sip7x",
    {
      host: "eporqep6b4b8ql12.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
      dialect: "mysql",
      logging: true,
    }
  );
} else {
  db = new Sequelize("Nerviidevelopperhelper", "root", "root", {
    host: "Localhost",
    dialect: "mysql",
  });
}

module.exports = db;
