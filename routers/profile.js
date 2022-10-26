const express = require('express');
const profileRouter = express.Router();
const {verifyToken} = require('../controllers/profileController.js');

profileRouter.get('/', async (req,res) => {
    try {
        const user = await verifyToken(req.headers.authorization);
        res.json(user);
    } catch (err) {
        res.status(403).send(err.message);
    };
});

module.exports = profileRouter;