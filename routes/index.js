const router = require('express').Router();
const auth = require('../middlewares/auth');
const { createProfile, signIn, signOut } = require('../controllers/users');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const NotFoundError = require('../errors/NotFoundError');

router.use('/signup', createProfile);
router.use('/signin', signIn);

router.use(auth);

router.post('/signout', signOut);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

router.use(() => { throw new NotFoundError('Ресурс по указанному адресу не найден'); });

module.exports = router;
