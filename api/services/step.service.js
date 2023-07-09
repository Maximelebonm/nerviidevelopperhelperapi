const libraryShema = require("../schemas/library.shema");
const { QueryTypes } = require("sequelize");
const db = require("../configs/db.configs");

const stepByIdLibrary = async (req, res) => {
  const fetchOne = await db.query(
    `SELECT * FROM step as s WHERE s.Id_library = ${req.params.id}`,
    {
      type: QueryTypes.SELECT,
    }
  );
  return fetchOne;
};

module.exports = { stepByIdLibrary };
