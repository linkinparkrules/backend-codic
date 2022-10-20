const express = require('express');
const userRouter = express.Router();
const {login} = require('../controllers/userController.js');

userRouter.post('/login', async (req,res) => {
    try {
        const user = await login(req.body.username, req.body.password);
        res.json(user);
    } catch (err) {
        res.status(409).send(err.message);
    }
})

module.exports = userRouter;
