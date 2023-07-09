const mysql = require("mysql");
const { Sequelize, DataTypes, Op, Model } = require("sequelize");
const db = require("../configs/db.configs");
const libraryCategorySchema = require("./libraryCategory.shema");

const librarySchema = db.define(
  "library",
  {
    Id_library: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nodeModulePackage: {
      type: DataTypes.STRING,
    },
    createur: {
      type: DataTypes.STRING,
    },
    date_creation: {
      type: DataTypes.DATE,
    },
    date_maj: {
      type: DataTypes.DATE,
    },
    validation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    soucre: {
      type: DataTypes.STRING,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    framework: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mots_clef: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    Id_libraryCategory: {
      type: DataTypes.INTEGER,
      references: {
        model: libraryCategorySchema,
        key: "Id_libraryCategory",
      },
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
    tableName: "library",
  }
);

async function synchroniserTables() {
  await db.sync();
  console.log("Tables synchronisées !");
}

synchroniserTables();
console.log("library", librarySchema === db.models.librarySchema);

module.exports = librarySchema;
