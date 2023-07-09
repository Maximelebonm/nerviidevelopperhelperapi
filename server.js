const express = require("express");
const cors = require("cors");
const { Sequelize, QueryTypes } = require("sequelize");
const mysql = require("mysql");
const dotenv = require("dotenv");
const appConfigs = require("./api/configs")("app");

const app = express();

const libraryCategorySchema = require("./api/schemas/libraryCategory.shema");
const library = require("./api/schemas/library.shema");
const stepSchema = require("./api/schemas/step.shema");
// const UserRoutes = require('./api/routers/user.router')
const libraryRoutes = require("./api/routers/library.router");
const stepRoutes = require("./api/routers/step.router");
const libraryCategoryRoutes = require("./api/routers/libraryCategory.router");
// const ComposerRoutes = require('./api/routers/composer.router')
// const accordRoutes = require('./api/routers/accord.router')

let corsOption;
let sequelize;
if (process.env.NODE_ENV === "production") {
  corsOption = {
    origin: appConfigs.origin,
    credentials: true,
  };
  const sequilize = new Sequelize(
    "eg1j1ajilkczimm",
    "bejeqxmew6pyizdi",
    "phzrauccqh9sip7x",
    {
      host: "eporqep6b4b8ql12.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
      dialect: "mysql",
      logging: true,
    }
  );
} else {
  corsOption = {
    origin: appConfigs.origin,
    credentials: true,
  };
  sequelize = new Sequelize("Nerviidevelopperhelper", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  });
}

app.use(cors(corsOption));

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use("/library", libraryRoutes);
app.use("/step", stepRoutes);
app.use("/libraryCategory", libraryCategoryRoutes);

app.listen(process.env.PORT, () => {
  console.log("serveur started on : ", process.env.PORT);
});
