const errorHandler = (err, req, res, next) => {
  const { message, statusCode } = err;
  res.status(statusCode).send({ message: statusCode === 500 ? 'На сервере произошла ошибка.' : message });
  next();
};

module.exports = { errorHandler };
