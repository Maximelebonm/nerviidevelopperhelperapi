module.exports = (name) => {
  require("dotenv").config();
  try {
    return require(`./${process.env.NODE_ENV}/${name}.configs`);
  } catch {
    return null;
  }
};

// const dbDev = require("./development/db.configs");
// const dbProd = require("./production/db.configs");

// const { Sequelize, QueryTypes } = require("sequelize");
// let sequelize;
// if (process.env.NODE_ENV === "production") {
// const sequilize = new Sequelize(
//     "lahvzp7oj36nh08s",
//     "s2jaqrvwa7ie85ug",
//     "eeh69a5fkf9gl2yv",
//     {
//       host: "wcwimj6zu5aaddlj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//       dialect: "mysql",
//       logging: true,
//     }
//   );
// } else {
//   return dbDev
// };
