const stepService = require("../services/step.service");

const stepByIdLibrary = async (req, res) => {
  try {
    const fetchStepByIdLibrary = await stepService.stepByIdLibrary(req);
    res.status(200).send(fetchStepByIdLibrary);
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
};

module.exports = { stepByIdLibrary };
