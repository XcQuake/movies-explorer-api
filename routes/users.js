const router = require('express').Router();
const {
  getProfie,
  updateProfile,
} = require('../controllers/users');

router.get('/me', getProfie);
router.patch('/me', updateProfile);

module.exports = router;
