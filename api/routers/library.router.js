const express = require("express");
const libraryController = require("../controllers/library.controller");
const router = express.Router();

router.get("/:id", libraryController.getOne);
router.get("/filter/:id", libraryController.getByCategory);
module.exports = router;
