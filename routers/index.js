const express = require('express');
const router = express.Router();
const userRouter = require('./user.js');
const profileRouter = require('./profile.js');
const elementRouter = require('./element.js');

router.use('/', userRouter);
router.use('/profile/me', profileRouter);
router.use('/', elementRouter);

module.exports = router;