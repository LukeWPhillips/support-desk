const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

// ternary operator
// if that is equal to production then i want this to be null
//  else i want this to be the error stack

module.exports = { errorHandler };
