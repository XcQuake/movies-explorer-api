const validator = require('validator');
const BadRequestError = require('../errors/BadRequestError');

module.exports = function emailValidator(email) {
  const validity = validator.isEmail(email);
  if (!validity) {
    throw new BadRequestError('Некорректный email-адрес');
  }
  return email;
};
