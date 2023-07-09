const express = require("express");
const stepController = require("../controllers/step.controller");
const router = express.Router();

router.get("/:id", stepController.stepByIdLibrary);

module.exports = router;