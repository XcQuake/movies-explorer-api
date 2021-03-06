const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const emailValidator = require('../validators/emailValidator');
const UnauthorizedError = require('../errors/UnauthorizedError');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: emailValidator,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) throw new UnauthorizedError('Вы ввели неправильный логин или пароль.');
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) throw new UnauthorizedError('Вы ввели неправильный логин или пароль.');
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
