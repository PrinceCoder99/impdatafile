const express = require('express');
const { registerUser, getUser, adminLogin } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.get('/sbi-users', getUser)

module.exports = router;
