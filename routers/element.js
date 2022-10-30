const express = require('express');
const elementRouter = express.Router();
const {showTagType} = require('../controllers/elementController');

elementRouter.get('/exercise/element', async (req,res) => {
    try {
        const htmlTag = await showTagType("html");
        const cssTag  = await showTagType("css");
        const jsTag   = await showTagType("js");
        res.json({
            htmlTag: htmlTag,
            cssTag: cssTag,
            jsTag: jsTag
        });
    } catch(err) {
        res.status(404).send(err.message);
    }
});

module.exports = elementRouter;