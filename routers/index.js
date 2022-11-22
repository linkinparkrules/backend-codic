const express = require('express');
const router = express.Router();
const userRouter = require('./user.js');
const profileRouter = require('./profile.js');
const elementRouter = require('./element.js');
const feedBackRouter = require('./feedback.js');

router.use('/', userRouter);
router.use('/profile/me', profileRouter);
router.use('/exercise/element', elementRouter);
router.use('/', feedBackRouter);

module.exports = router;