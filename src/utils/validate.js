const { handleSendResponse } = require("./messageHandler");

const validateStudentData = (req, res, next) => {
  let errorMessages = "";
  const { id, age } = req.body;
  if (typeof id !== "number") {
      errorMessages = "Id should be a number"
  }

  if (typeof age !== "number") {
    errorMessages = errorMessages+", Age should be a number"
}

  if (errorMessages) {
    return handleSendResponse(res, "Failed", 400, errorMessages);
  }

  next();
};

module.exports = validateStudentData;
