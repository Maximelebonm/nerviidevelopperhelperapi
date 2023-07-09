const libraryCategoryShema = require("../schemas/libraryCategory.shema");
const { QueryTypes } = require("sequelize");
const db = require("../configs/db.configs");

const getAll = async (req, res) => {
  const fetchAllCategory = await db.query(`SELECT * FROM librarycategory`, {
    type: QueryTypes.SELECT,
  });
  return fetchAllCategory;
};

module.exports = { getAll };
