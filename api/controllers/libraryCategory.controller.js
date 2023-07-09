const libraryCategoryService = require("../services/libraryCategory.service");

const getAll = async (req, res) => {
  try {
    const fetchLibraryCategory = await libraryCategoryService.getAll(req);
    res.status(200).send(fetchLibraryCategory);
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
};

module.exports = { getAll };
