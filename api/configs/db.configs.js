const Sequelize = require("sequelize");

let db;
if (process.env.NODE_ENV === "production") {
  db = new Sequelize(
    "h4ez118hl5fn2zs2",
    "a6v7o484r0pzbrcq",
    "ljuewexkl0e1f27n",
    {
      host: "clwxydcjair55xn0.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
      dialect: "mysql",
      logging: true,
    }
  );
} else {
  db = new Sequelize("nerviidevelopperhelper", "root", "root", {
    host: "Localhost",
    dialect: "mysql",
  });
}

module.exports = db;
