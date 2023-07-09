const libraryService = require("../services/library.service");

const getOne = async (req, res) => {
  try {
    const fetchOne = await libraryService.getOne(req);
    res.status(200).send(fetchOne);
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
};

const getByCategory = async (req, res) => {
  try {
    const fetchByCategory = await libraryService.getByCategory(req);
    res.status(200).send(fetchByCategory);
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
};

module.exports = { getOne, getByCategory };
