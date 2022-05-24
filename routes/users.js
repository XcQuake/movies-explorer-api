const router = require('express').Router();
const {
  getProfile,
  updateProfile,
} = require('../controllers/users');
const { getProfileValidation, updateProfileValidation } = require('../middlewares/validation');

router.get('/me', getProfileValidation, getProfile);
router.patch('/me', updateProfileValidation, updateProfile);

module.exports = router;
