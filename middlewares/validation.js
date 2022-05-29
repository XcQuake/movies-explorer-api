const { celebrate, Joi } = require('celebrate');
const urlValidator = require('../validators/urlValidator');
const emailValidator = require('../validators/emailValidator');

const signupValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().custom(emailValidator),
    password: Joi.string().required(),
    name: Joi.string().required().min(2).max(30),
  }),
});

const signinValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().custom(emailValidator),
    password: Joi.string().required(),
  }),
});

const updateProfileValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().custom(emailValidator),
  }),
});

const createMovieValidation = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().custom(urlValidator),
    trailerLink: Joi.string().required().custom(urlValidator),
    thumbnail: Joi.string().required().custom(urlValidator),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const deleteMovieValidation = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().length(24).hex().required(),
  }),
});

module.exports = {
  signupValidation,
  signinValidation,
  updateProfileValidation,
  createMovieValidation,
  deleteMovieValidation,
};
