const express = require('express');
const router = express.Router();
const userRouter = require('./user.js');
const profileRouter = require('./profile.js');

router.use('/', userRouter);
router.use('/profile/me', profileRouter);

module.exports = router;