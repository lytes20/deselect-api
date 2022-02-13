exports.handleSendResponse = (res, message, statusCode, data) =>
  res.status(statusCode).json({
    code: statusCode,
    message,
    data,
  });
