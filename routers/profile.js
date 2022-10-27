const express = require('express');
const profileRouter = express.Router();
const {verifyToken} = require('../controllers/profileController.js');
const jwt = require('jsonwebtoken');
const {findById} = require('../database/user.js');

profileRouter.get('/', async (req,res) => {
    try {
        const user = await verifyToken(req.headers.authorization);
        // console.log(user);
        res.json(user);
    } catch (err) {
        res.status(403).send(err.message);
    };
});

module.exports = profileRouter;