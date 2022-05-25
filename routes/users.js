const router = require('express').Router();
const {
  getProfile,
  updateProfile,
} = require('../controllers/users');
const { updateProfileValidation } = require('../middlewares/validation');

router.get('/me', getProfile);
router.patch('/me', updateProfileValidation, updateProfile);

module.exports = router;
