const express = require('express');
const userRouter = express.Router();
const {login} = require('../controllers/userController.js');

userRouter.post('/login', (req,res) => {
    try {
        const user = login(req.body.username, req.body.password);
        res.json(user);
    } catch (err) {
        res.status(409).send(err.message);
    }
})

module.exports = userRouter;
