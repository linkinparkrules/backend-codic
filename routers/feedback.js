const express = require('express');
const feedBackRouter = express.Router();
const { postFb, getFb } = require('../controllers/feedBackController');

feedBackRouter.post('/contact', async (req, res) => {
  try {
    const feedback = await postFb(req.body.email, req.body.feedback);
    res.json(feedback);
  } catch (err) {
    res.status(404).send(err.message);
  };
});

feedBackRouter.get('/admin', async (req, res) => {
  try {
    const all = await getFb();
    res.json(all);
  } catch (err) {
    res.status(404).send(err.message);
  };
});

module.exports = feedBackRouter;