const express = require('express');
const userRouter = express.Router();
const {login, signup} = require('../controllers/userController.js');

userRouter.post('/login', async (req,res) => {
    try {
        const user = await login(req.body.username, req.body.password);
        res.json(user);
    } catch (err) {
        res.status(409).send(err.message);
    }
})

userRouter.post('/signup', async (req,res) => {
    if(!req.body.password || req.body.password.length < 8) {
        res.status(400).send('password must contain at least 8 characters');
        return;
    };
    
    try {
        const user = await signup(req.body.username,req.body.email, req.body.password);
        res.json(user);
    } catch (err) {
        res.status(409).send(err.message);
    };
});

module.exports = userRouter;
