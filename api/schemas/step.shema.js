const mysql = require("mysql");
const { Sequelize, DataTypes, Op, Model } = require("sequelize");
const db = require("../configs/db.configs");
const librarySchema = require("./library.shema");

const stepSchema = db.define(
  "step",
  {
    Id_step: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    code: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
    },
    explication: {
      type: DataTypes.STRING(1000),
    },
    Id_library: {
      type: DataTypes.INTEGER,
      references: {
        model: librarySchema,
        key: "Id_library",
      },
      allowNull: false,
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
    tableName: "step",
  }
);
async function synchroniserTables() {
  await db.sync();
  console.log("Tables synchronisées !");
}

synchroniserTables();
module.exports = stepSchema;
