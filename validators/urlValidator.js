const validator = require('validator');
const BadRequestError = require('../errors/BadRequestError');

module.exports = function urlValidator(url) {
  const validity = validator.isURL(url);
  if (!validity) {
    throw new BadRequestError('Некорректный адрес');
  }
  return url;
};
