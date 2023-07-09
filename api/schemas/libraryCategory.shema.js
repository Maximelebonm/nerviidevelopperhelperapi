const mysql = require("mysql");
const { Sequelize, DataTypes, Op, Model } = require("sequelize");
const db = require("../configs/development/db.configs");

const libraryCategorySchema = db.define(
  "libraryCategory",
  {
    Id_libraryCategory: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    tableName: "libraryCategory",
  }
);

async function synchroniserTables() {
  await db.sync();
  console.log("Tables synchronisées !");
}

synchroniserTables();

module.exports = libraryCategorySchema;
