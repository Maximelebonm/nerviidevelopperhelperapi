const libraryShema = require("../schemas/library.shema");
const { QueryTypes } = require("sequelize");
const db = require("../configs/db.configs");

const getOne = async (req, res) => {
  const fetchOne = await db.query(
    `SELECT * FROM library as l WHERE Id_library = ${req.params.id}`,
    {
      type: QueryTypes.SELECT,
    }
  );
  return fetchOne;
};

const getByCategory = async (req, res) => {
  const fetchOne = await db.query(
    `SELECT * FROM library as l WHERE l.Id_libraryCategory = ${req.params.id}`,
    {
      type: QueryTypes.SELECT,
    }
  );
  return fetchOne;
};

module.exports = { getOne, getByCategory };
