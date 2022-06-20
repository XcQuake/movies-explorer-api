const router = require('express').Router();
const auth = require('../middlewares/auth');
const { createProfile, signIn, signOut } = require('../controllers/users');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const NotFoundError = require('../errors/NotFoundError');
const { signupValidation, signinValidation } = require('../middlewares/validation');

router.use('/signup', signupValidation, createProfile);
router.use('/signin', signinValidation, signIn);

router.use(auth);

router.post('/signout', signOut);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

router.use(() => { throw new NotFoundError('Страница по указанному маршруту не найдена.'); });

module.exports = router;
