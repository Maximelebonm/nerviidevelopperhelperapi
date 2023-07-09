const express = require("express");
const libraryCategoryController = require("../controllers/libraryCategory.controller");
const router = express.Router();

router.get("/", libraryCategoryController.getAll);

module.exports = router;