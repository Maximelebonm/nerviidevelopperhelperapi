const express = require("express");
const cors = require("cors");
const { Sequelize, QueryTypes } = require("sequelize");
const mysql = require("mysql2");
const appConfigs = require("./api/configs/app.configs");

const app = express();

const libraryCategorySchema = require("./api/schemas/libraryCategory.shema");
const library = require("./api/schemas/library.shema");
const stepSchema = require("./api/schemas/step.shema");

const libraryRoutes = require("./api/routers/library.router");
const stepRoutes = require("./api/routers/step.router");
const libraryCategoryRoutes = require("./api/routers/libraryCategory.router");

let corsOption;
let sequelize;
if (process.env.NODE_ENV === "production") {
  corsOption = {
    origin: appConfigs.configProd.origin,
    credentials: true,
  };
} else {
  corsOption = {
    origin: appConfigs.configDev.origin,
    credentials: true,
  };
}
if (process.env.NODE_ENV === "production") {
  sequelize = new Sequelize(
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
  sequelize = new Sequelize("nerviidevelopperhelper", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  });
}

console.log(sequelize);
app.use(cors(corsOption));

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json("hello, heroku !");
});

app.use("/library", libraryRoutes);
app.use("/step", stepRoutes);
app.use("/libraryCategory", libraryCategoryRoutes);

app.listen(port, () => {
  console.log("serveur started on : ", port);
});
